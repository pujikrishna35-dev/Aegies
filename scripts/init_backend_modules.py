import os

base = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\backend\src"
modules = [
    'courses', 'destinations', 'scholarships', 'services', 
    'test-preparation', 'testimonials', 'student-stories', 'blog', 
    'enquiries', 'consultations', 'applications', 'documents', 
    'media', 'notifications', 'analytics', 'seo', 'settings', 'audit-logs'
]

for m in modules:
    d = os.path.join(base, m)
    os.makedirs(d, exist_ok=True)
    f = os.path.join(d, 'index.ts')
    if not os.path.exists(f):
        clean_name = m.replace("-", "_")
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(f"// Module: {m}\nexport const {clean_name}ModuleConfig = {{ name: '{m}' }};\n")

print(f"Initialized {len(modules)} backend modules.")
