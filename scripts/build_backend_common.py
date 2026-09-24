import os

backend_src = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\backend\src"

# Common subfolders
common_dirs = [
  "decorators", "guards", "interceptors", "filters", "pipes", "middleware", "utils"
]
for cd in common_dirs:
    p = os.path.join(backend_src, "common", cd)
    os.makedirs(p, exist_ok=True)
    idx = os.path.join(p, "index.ts")
    if not os.path.exists(idx):
        with open(idx, "w", encoding="utf-8") as f:
            f.write(f"// Common: {cd}\nexport const {cd}Config = {{}};\n")

# storage.config.ts in backend/src/config
cfg_dir = os.path.join(backend_src, "config")
os.makedirs(cfg_dir, exist_ok=True)
storage_cfg = os.path.join(cfg_dir, "storage.config.ts")
if not os.path.exists(storage_cfg):
    with open(storage_cfg, "w", encoding="utf-8") as f:
        f.write('''export const storageConfig = () => ({
  uploadDest: process.env.UPLOAD_DEST || './uploads',
  maxFileSize: 10 * 1024 * 1024, // 10MB
});
''')

# Notifications subfolders
notif_dir = os.path.join(backend_src, "notifications")
for ch in ["email", "whatsapp", "sms"]:
    ch_dir = os.path.join(notif_dir, ch)
    os.makedirs(ch_dir, exist_ok=True)
    idx = os.path.join(ch_dir, "index.ts")
    if not os.path.exists(idx):
        with open(idx, "w", encoding="utf-8") as f:
            f.write(f"// Notification channel: {ch}\nexport const {ch}Channel = {{}};\n")

print("Backend common, config, and notification channels created.")
