import os

base = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src\components"
subs = ['destinations', 'universities', 'courses', 'services', 'scholarships', 'test-preparation', 'student-stories', 'testimonials', 'blog', 'common']
for s in subs:
    p = os.path.join(base, s)
    os.makedirs(p, exist_ok=True)
    idx = os.path.join(p, 'index.ts')
    if not os.path.exists(idx):
        with open(idx, 'w', encoding='utf-8') as f:
            f.write(f"// Component group: {s}\nexport {{}};\n")

print(f"Verified {len(subs)} component index files.")
