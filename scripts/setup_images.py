import os
import shutil

base = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\public"

# Airplane
airliner = os.path.join(base, "images", "airliner-climb.png")
hero_plane = os.path.join(base, "images", "hero", "airplane.png")
if os.path.exists(airliner):
    shutil.copy2(airliner, hero_plane)
    print("Copied airliner-climb to hero/airplane.png")

# world-map.svg
world_map = os.path.join(base, "images", "hero", "world-map.svg")
with open(world_map, "w", encoding="utf-8") as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" width="1000" height="500" fill="none" opacity="0.15">
  <path d="M150 120 Q 220 80 300 130 T 450 150 T 600 120 T 750 160 T 900 130" stroke="#8A1538" stroke-width="2" stroke-dasharray="6,6" />
  <circle cx="200" cy="140" r="4" fill="#8A1538" />
  <circle cx="480" cy="130" r="4" fill="#8A1538" />
  <circle cx="780" cy="150" r="4" fill="#8A1538" />
</svg>''')

# Destinations
dest_names = ['uk', 'usa', 'canada', 'australia', 'germany', 'ireland', 'new-zealand', 'europe']
dest_dir = os.path.join(base, "images", "destinations")
os.makedirs(dest_dir, exist_ok=True)
for d in dest_names:
    f_path = os.path.join(dest_dir, f"{d}.webp")
    if not os.path.exists(f_path):
        # Create an SVG or copy
        svg_path = os.path.join(dest_dir, f"{d}.svg")
        with open(svg_path, "w", encoding="utf-8") as f:
            f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <rect width="400" height="300" fill="#1C2541"/>
  <text x="200" y="150" fill="#E5C378" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle">{d.upper()}</text>
</svg>''')

# hero-student and hero-city
banner = os.path.join(base, "images", "hero", "hero-banner.png")
hero_student = os.path.join(base, "images", "hero", "hero-student.webp")
hero_city = os.path.join(base, "images", "hero", "hero-city.webp")
if os.path.exists(banner):
    if not os.path.exists(hero_student):
        shutil.copy2(banner, hero_student)
    if not os.path.exists(hero_city):
        shutil.copy2(banner, hero_city)

print("Hero and Destination assets generated successfully.")
