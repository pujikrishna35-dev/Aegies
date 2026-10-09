"""
Script to extract university directory data and logo images from
docs/Europe_University_Directory_2026.pdf and generate:
1. frontend/src/data/universities/europe_universities.json
2. frontend/public/logos/university_logos/europe_{num}_{slug}.png
3. Append/update docs/all_institutions.csv
"""

import os
import re
import io
import json
import csv
import sys
from PIL import Image
import PyPDF2

PDF_PATH = os.path.abspath('docs/Europe_University_Directory_2026.pdf')
LOGOS_DIR = os.path.abspath('frontend/public/logos/university_logos')
JSON_OUTPUT = os.path.abspath('frontend/src/data/universities/europe_universities.json')
CSV_PATH = os.path.abspath('docs/all_institutions.csv')

def slugify(text: str) -> str:
    slug = re.sub(r'[^a-z0-9]+', '_', text.lower()).strip('_')
    return slug[:60] if slug else 'institution'

def load_pdf_image(obj) -> Image.Image | None:
    w = obj['/Width']
    h = obj['/Height']
    data = obj.get_data()
    img = None
    try:
        img = Image.frombytes('RGB', (w, h), data)
    except Exception:
        try:
            img = Image.open(io.BytesIO(data))
            if img.mode != 'RGB':
                img = img.convert('RGB')
        except Exception as e:
            print(f'Error loading image bytes: {e}')
            return None

    if '/SMask' in obj:
        try:
            smask_obj = obj['/SMask'].get_object()
            sw = smask_obj['/Width']
            sh = smask_obj['/Height']
            sdata = smask_obj.get_data()
            mask = None
            try:
                mask = Image.frombytes('L', (sw, sh), sdata)
            except Exception:
                mask = Image.open(io.BytesIO(sdata)).convert('L')
            if mask:
                if mask.size != img.size:
                    mask = mask.resize(img.size, Image.Resampling.LANCZOS)
                # Composite onto white background for uniform appearance
                bg = Image.new('RGB', img.size, (255, 255, 255))
                img_rgba = img.convert('RGBA')
                img_rgba.putalpha(mask)
                bg.paste(img_rgba, mask=mask)
                return bg
        except Exception as e:
            print(f'Warning: SMask error: {e}')

    return img.convert('RGB')

def main():
    print(f'Opening PDF: {PDF_PATH}')
    reader = PyPDF2.PdfReader(PDF_PATH)
    total_pages = len(reader.pages)
    print(f'Total pages in PDF: {total_pages}')

    os.makedirs(LOGOS_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(JSON_OUTPUT), exist_ok=True)

    all_entries = []
    saved_logos_count = 0
    missing_logos_count = 0

    # Pages 4 to 367 (indices 3 to 366)
    for page_idx in range(3, 367):
        page = reader.pages[page_idx]
        text = page.extract_text()
        lines = [l.strip() for l in text.split('\n') if l.strip()]
        if not lines:
            continue

        country = lines[0]

        # Parse text chunks for entries
        idx_positions = [i for i, l in enumerate(lines) if re.match(r'^\d{4}$', l)]
        page_entries = []

        for j, pos in enumerate(idx_positions):
            next_pos = idx_positions[j + 1] if j + 1 < len(idx_positions) else len(lines)
            chunk = lines[pos:next_pos]
            # Strip footer lines
            chunk = [
                c for c in chunk
                if not c.startswith('Europe university directory')
                and not (re.match(r'^\d+$', c) and c != chunk[0])
            ]

            num_str = chunk[0]
            num = int(num_str)
            rest = chunk[1:]

            if len(rest) >= 2 and rest[0] == 'Icon' and rest[1] == 'unavailable':
                has_icon = False
                rest = rest[2:]
            else:
                has_icon = True

            website_domain = rest[-1] if rest else ''
            name_parts = rest[:-1] if len(rest) > 1 else ([rest[0]] if rest else [''])
            name = ' '.join(name_parts).strip()

            # Clean name if needed
            name = re.sub(r'\s+', ' ', name)

            # Website URL construction
            if website_domain.startswith('http://') or website_domain.startswith('https://'):
                website_url = website_domain
            else:
                website_url = f'https://{website_domain}'

            page_entries.append({
                'num': num,
                'num_str': num_str,
                'name': name,
                'country': country,
                'website_domain': website_domain,
                'website_url': website_url,
                'has_icon': has_icon,
                'logo_file': None,
                'source_page': page_idx + 1
            })

        # Match images if any
        res = page.get('/Resources', {}).get_object()
        xobjs = res.get('/XObject', {}).get_object() if '/XObject' in res else {}

        content = page.get_contents().get_data().decode('latin1')
        do_matches = re.findall(r'([\d\.\-]+)\s+([\d\.\-]+)\s+([\d\.\-]+)\s+([\d\.\-]+)\s+([\d\.\-]+)\s+([\d\.\-]+)\s+cm\s*\n\s*(/[^\s]+)\s+Do', content)

        for m in do_matches:
            x = float(m[4])
            y = float(m[5])
            form_name = m[6]

            col = 0 if x < 200 else 1
            if y > 550:
                row = 0
            elif y > 380:
                row = 1
            elif y > 210:
                row = 2
            else:
                row = 3

            slot = row * 2 + col
            if slot < len(page_entries):
                entry = page_entries[slot]
                if entry['has_icon'] and form_name in xobjs:
                    img_obj = xobjs[form_name].get_object()
                    img = load_pdf_image(img_obj)
                    if img:
                        slug = slugify(entry['name'])
                        filename = f"europe_{entry['num']:04d}_{slug}.png"
                        out_path = os.path.join(LOGOS_DIR, filename)
                        img.save(out_path, format='PNG')
                        entry['logo_file'] = f"logos/{filename}"
                        saved_logos_count += 1

        for entry in page_entries:
            record = {
                'directory_id': f"europe-universities-{entry['num']:04d}",
                'number': entry['num'],
                'country': 'EUROPE',
                'section': 'universities_and_higher_education_institutions',
                'name': entry['name'],
                'location': entry['country'],
                'website_domain': entry['website_domain'],
                'website_url': entry['website_url'],
                'logo_available': entry['has_icon'],
                'source_pdf': 'Europe_University_Directory_2026.pdf',
                'source_page': entry['source_page'],
                'logo_file': entry['logo_file']
            }
            if not entry['has_icon']:
                missing_logos_count += 1
            all_entries.append(record)

        if (page_idx + 1) % 50 == 0 or page_idx == 366:
            print(f'Processed through page {page_idx + 1}/367... ({len(all_entries)} entries, {saved_logos_count} logos saved)')

    print('=' * 50)
    print(f'Extraction complete!')
    print(f'Total institutions: {len(all_entries)}')
    print(f'Logos saved: {saved_logos_count}')
    print(f'Logos missing/unavailable: {missing_logos_count}')

    # Write europe_universities.json
    with open(JSON_OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(all_entries, f, indent=2, ensure_ascii=False)
    print(f'Wrote JSON output to {JSON_OUTPUT}')

    # Update docs/all_institutions.csv
    # Read existing rows without EUROPE
    existing_rows = []
    fieldnames = [
        'directory_id', 'number', 'country', 'section', 'name',
        'location', 'website_domain', 'website_url',
        'logo_available', 'logo_file', 'source_pdf', 'source_page'
    ]
    if os.path.exists(CSV_PATH):
        with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row.get('country') != 'EUROPE':
                    existing_rows.append(row)
    print(f'Existing institutions in CSV (non-Europe): {len(existing_rows)}')

    for e in all_entries:
        existing_rows.append({
            'directory_id': e['directory_id'],
            'number': e['number'],
            'country': e['country'],
            'section': e['section'],
            'name': e['name'],
            'location': e['location'],
            'website_domain': e['website_domain'],
            'website_url': e['website_url'],
            'logo_available': e['logo_available'],
            'logo_file': e['logo_file'] or '',
            'source_pdf': e['source_pdf'],
            'source_page': e['source_page']
        })

    with open(CSV_PATH, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(existing_rows)
    print(f'Updated CSV at {CSV_PATH} with {len(existing_rows)} total rows.')

if __name__ == '__main__':
    main()
