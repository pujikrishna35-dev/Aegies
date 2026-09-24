import os
import re

src_dir = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src"
import_regex = re.compile(r'from\s+[\'"](\.[^\'"]+)[\'"]')

broken = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.ts', '.tsx')):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as handle:
                lines = handle.readlines()
            for line_idx, line in enumerate(lines):
                matches = import_regex.findall(line)
                for rel_path in matches:
                    curr_dir = os.path.dirname(filepath)
                    resolved_base = os.path.normpath(os.path.join(curr_dir, rel_path))
                    candidates = [
                        resolved_base,
                        resolved_base + '.ts',
                        resolved_base + '.tsx',
                        resolved_base + '.d.ts',
                        os.path.join(resolved_base, 'index.ts'),
                        os.path.join(resolved_base, 'index.tsx'),
                    ]
                    if not any(os.path.exists(c) for c in candidates):
                        broken.append((filepath, line_idx + 1, rel_path))

if broken:
    print(f"Found {len(broken)} unresolved relative imports:")
    for bp, lnum, imp in broken:
        print(f"  {bp}:{lnum} -> {imp}")
else:
    print("SUCCESS: All relative imports resolved perfectly!")
