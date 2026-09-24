import os

flags_dir = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\public\flags"
os.makedirs(flags_dir, exist_ok=True)

# 1. UK (Union Flag / Union Jack)
uk_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <clipPath id="uk_clip">
    <rect width="60" height="30" rx="0"/>
  </clipPath>
  <g clip-path="url(#uk_clip)">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/>
    <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" stroke-width="2" stroke-linecap="square"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" stroke-width="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
  </g>
</svg>'''

# 2. USA (Stars and Stripes)
usa_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="60" height="30" fill="#B22234"/>
  <path d="M0,2.308 h60 M0,6.923 h60 M0,11.538 h60 M0,16.154 h60 M0,20.769 h60 M0,25.385 h60" stroke="#FFFFFF" stroke-width="2.308"/>
  <rect width="24" height="16.154" fill="#3C3B6E"/>
  <g fill="#FFFFFF">
    <circle cx="4" cy="3" r="0.9"/>
    <circle cx="8" cy="3" r="0.9"/>
    <circle cx="12" cy="3" r="0.9"/>
    <circle cx="16" cy="3" r="0.9"/>
    <circle cx="20" cy="3" r="0.9"/>
    <circle cx="6" cy="6" r="0.9"/>
    <circle cx="10" cy="6" r="0.9"/>
    <circle cx="14" cy="6" r="0.9"/>
    <circle cx="18" cy="6" r="0.9"/>
    <circle cx="4" cy="9" r="0.9"/>
    <circle cx="8" cy="9" r="0.9"/>
    <circle cx="12" cy="9" r="0.9"/>
    <circle cx="16" cy="9" r="0.9"/>
    <circle cx="20" cy="9" r="0.9"/>
    <circle cx="6" cy="12" r="0.9"/>
    <circle cx="10" cy="12" r="0.9"/>
    <circle cx="14" cy="12" r="0.9"/>
    <circle cx="18" cy="12" r="0.9"/>
  </g>
</svg>'''

# 3. CANADA (Maple Leaf)
canada_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="15" height="30" fill="#FF0000"/>
  <rect x="15" width="30" height="30" fill="#FFFFFF"/>
  <rect x="45" width="15" height="30" fill="#FF0000"/>
  <!-- Stylized Maple Leaf -->
  <g fill="#FF0000" transform="translate(30, 15) scale(0.7)">
    <path d="M0,10 L1,4 L4,7 L5,5 L11,9 L10,3 L15,1 L14,-2 L9,-2 L12,-7 L9,-7 L7,-5 L8,-12 L4,-10 L3,-14 L0,-11 L-3,-14 L-4,-10 L-8,-12 L-7,-5 L-9,-7 L-12,-7 L-9,-2 L-14,-2 L-15,1 L-10,3 L-11,9 L-5,5 L-4,7 L-1,4 Z"/>
    <rect x="-0.7" y="6" width="1.4" height="7" fill="#FF0000"/>
  </g>
</svg>'''

# 4. GERMANY (Black, Red, Gold)
germany_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="60" height="10" fill="#000000"/>
  <rect y="10" width="60" height="10" fill="#DD0000"/>
  <rect y="20" width="60" height="10" fill="#FFCE00"/>
</svg>'''

# 5. IRELAND (Green, White, Orange)
ireland_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="20" height="30" fill="#169B62"/>
  <rect x="20" width="20" height="30" fill="#FFFFFF"/>
  <rect x="40" width="20" height="30" fill="#FF883E"/>
</svg>'''

# 6. AUSTRALIA (Blue Ensign + Union Jack + Commonwealth Star + Southern Cross)
australia_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="60" height="30" fill="#00008B"/>
  <g transform="scale(0.5)">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/>
    <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" stroke-width="2"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" stroke-width="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
  </g>
  <!-- Commonwealth Star -->
  <polygon points="15,19 16,21 18,20 17,22 19,23 17,24 18,26 16,25 15,27 14,25 12,26 13,24 11,23 13,22 12,20 14,21" fill="#FFFFFF" transform="scale(0.9) translate(2, 2)"/>
  <!-- Southern Cross -->
  <g fill="#FFFFFF">
    <circle cx="45" cy="6" r="1.3"/>
    <circle cx="52" cy="12" r="1.3"/>
    <circle cx="48" cy="16" r="0.9"/>
    <circle cx="38" cy="13" r="1.3"/>
    <circle cx="45" cy="24" r="1.3"/>
  </g>
</svg>'''

# 7. NEW ZEALAND (Blue Ensign + Union Jack + 4 Red Stars)
new_zealand_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="60" height="30" fill="#00247D"/>
  <g transform="scale(0.5)">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/>
    <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" stroke-width="2"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" stroke-width="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
  </g>
  <!-- Southern Cross Red Stars with White Border -->
  <g fill="#CC142B" stroke="#FFFFFF" stroke-width="0.6">
    <circle cx="45" cy="6" r="1.5"/>
    <circle cx="52" cy="13" r="1.5"/>
    <circle cx="38" cy="13" r="1.5"/>
    <circle cx="45" cy="22" r="1.8"/>
  </g>
</svg>'''

# 8. EUROPE (EU 12 Stars on Blue)
europe_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30">
  <rect width="60" height="30" fill="#003399"/>
  <g fill="#FFCC00" transform="translate(30, 15) scale(0.65)">
    <circle cx="0" cy="-14" r="1.6"/>
    <circle cx="7" cy="-12" r="1.6"/>
    <circle cx="12" cy="-7" r="1.6"/>
    <circle cx="14" cy="0" r="1.6"/>
    <circle cx="12" cy="7" r="1.6"/>
    <circle cx="7" cy="12" r="1.6"/>
    <circle cx="0" cy="14" r="1.6"/>
    <circle cx="-7" cy="12" r="1.6"/>
    <circle cx="-12" cy="7" r="1.6"/>
    <circle cx="-14" cy="0" r="1.6"/>
    <circle cx="-12" cy="-7" r="1.6"/>
    <circle cx="-7" cy="-12" r="1.6"/>
  </g>
</svg>'''

flags = {
    'uk.svg': uk_svg,
    'usa.svg': usa_svg,
    'canada.svg': canada_svg,
    'germany.svg': germany_svg,
    'ireland.svg': ireland_svg,
    'australia.svg': australia_svg,
    'new-zealand.svg': new_zealand_svg,
    'europe.svg': europe_svg
}

for fname, content in flags.items():
    fpath = os.path.join(flags_dir, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote authentic national flag: {fname}')

print('SUCCESS: All 8 flags created successfully!')
