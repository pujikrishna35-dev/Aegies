# Script to generate a clean, elegant world map SVG with subtle global connection lines
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600" fill="none">
  <defs>
    <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#E2C474" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#C5A059" stop-opacity="0.15" />
    </linearGradient>
    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF5D6" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#C5A059" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- World Map Continents (Geometric / Dot-Matrix Silhouette) -->
  <g fill="url(#mapGlow)">
    <!-- North America -->
    <path d="M120 90 L180 80 L240 70 L300 80 L340 100 L350 140 L320 180 L290 200 L270 240 L250 280 L230 290 L210 260 L200 220 L160 200 L140 160 L120 120 Z" opacity="0.4" />
    <path d="M190 60 L250 50 L270 70 L210 80 Z" opacity="0.3" /> <!-- Greenland / Arctic -->
    <path d="M330 40 L390 35 L420 55 L360 65 Z" opacity="0.3" />

    <!-- Central America & Caribbean -->
    <path d="M230 290 L260 320 L270 340 L250 345 L230 310 Z" opacity="0.4" />

    <!-- South America -->
    <path d="M270 340 L330 350 L370 380 L380 430 L350 490 L320 540 L290 530 L280 480 L270 420 L260 370 Z" opacity="0.4" />

    <!-- Europe -->
    <path d="M540 90 L580 85 L620 95 L650 130 L640 170 L600 190 L570 185 L550 160 L530 140 L535 110 Z" opacity="0.45" />
    <path d="M510 110 L530 105 L535 130 L515 135 Z" opacity="0.45" /> <!-- UK & Ireland -->
    <path d="M570 60 L610 50 L620 80 L580 90 Z" opacity="0.35" /> <!-- Scandinavia -->

    <!-- Africa -->
    <path d="M540 200 L630 200 L670 250 L680 320 L650 380 L620 440 L590 470 L570 450 L560 380 L520 310 L520 240 Z" opacity="0.4" />

    <!-- Asia -->
    <path d="M650 90 L750 70 L870 75 L980 90 L1040 120 L1020 180 L960 220 L920 250 L870 280 L820 290 L790 270 L750 250 L700 230 L660 180 Z" opacity="0.45" />
    <path d="M780 270 L830 270 L840 330 L800 370 L780 340 Z" opacity="0.4" /> <!-- India -->
    <path d="M890 270 L940 280 L950 340 L910 350 L890 310 Z" opacity="0.4" /> <!-- SE Asia -->
    <path d="M990 140 L1030 150 L1020 200 L980 190 Z" opacity="0.4" /> <!-- Japan -->

    <!-- Australia & New Zealand -->
    <path d="M940 400 L1020 390 L1060 430 L1050 480 L1000 510 L940 490 L920 440 Z" opacity="0.45" />
    <path d="M1080 470 L1100 465 L1110 500 L1090 510 Z" opacity="0.4" /> <!-- NZ -->
  </g>

  <!-- Network Connection Flight Arcs -->
  <g stroke="#E2C474" stroke-width="1.2" opacity="0.35" fill="none">
    <!-- North America to Europe -->
    <path d="M260 160 Q 400 80 560 140" stroke-dasharray="4 6" />
    <!-- Europe to Asia -->
    <path d="M580 140 Q 750 90 900 180" stroke-dasharray="4 6" />
    <!-- Europe to India -->
    <path d="M590 150 Q 690 180 800 300" stroke-dasharray="4 6" />
    <!-- North America to Asia across Pacific -->
    <path d="M220 200 Q 140 120 60 150" stroke-dasharray="4 6" />
    <path d="M1140 150 Q 1060 120 980 160" stroke-dasharray="4 6" />
    <!-- Asia to Australia -->
    <path d="M920 260 Q 960 330 980 420" stroke-dasharray="4 6" />
    <!-- UK to Australia route -->
    <path d="M530 130 Q 760 240 990 430" stroke-dasharray="3 7" stroke-width="0.9" opacity="0.25" />
    <!-- USA to Australia route -->
    <path d="M240 240 Q 580 500 950 450" stroke-dasharray="3 7" stroke-width="0.9" opacity="0.2" />
  </g>

  <!-- Glowing Hub Nodes -->
  <g fill="#FFF8E7">
    <!-- New York / USA -->
    <circle cx="270" cy="170" r="3.5" />
    <circle cx="270" cy="170" r="8" fill="url(#nodeGlow)" />
    <!-- London / UK -->
    <circle cx="530" cy="130" r="3.5" />
    <circle cx="530" cy="130" r="8" fill="url(#nodeGlow)" />
    <!-- Frankfurt / Germany / Europe -->
    <circle cx="580" cy="140" r="3.5" />
    <circle cx="580" cy="140" r="8" fill="url(#nodeGlow)" />
    <!-- Dubai Hub -->
    <circle cx="690" cy="220" r="3" />
    <circle cx="690" cy="220" r="7" fill="url(#nodeGlow)" />
    <!-- Singapore / SE Asia -->
    <circle cx="900" cy="310" r="3" />
    <!-- Sydney / Australia -->
    <circle cx="1030" cy="470" r="3.5" />
    <circle cx="1030" cy="470" r="8" fill="url(#nodeGlow)" />
    <!-- Toronto / Canada -->
    <circle cx="260" cy="140" r="3" />
  </g>
</svg>
'''

with open(r'c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\public\images\hero\world-map.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content.strip())

print('Created world-map.svg successfully!')
