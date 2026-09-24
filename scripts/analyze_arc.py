from PIL import Image

img = Image.open(r'C:\Users\PUJI KRISHNA\.gemini\antigravity-ide\brain\298c9e73-8d18-4be6-bb67-5eec7522ff3f\.user_uploaded\media_1788852606471.png')
w, h = img.size
print(f'Dimensions: {w}x{h}')

# Find red pixels: r > 180 and g < 70 and b < 70
red_pts = []
for y in range(h):
    for x in range(w):
        r, g, b = img.getpixel((x, y))[:3]
        if r > 180 and g < 70 and b < 70:
            red_pts.append((x, y))

print(f'Total red pixels: {len(red_pts)}')
if red_pts:
    min_x = min(p[0] for p in red_pts)
    max_x = max(p[0] for p in red_pts)
    min_y = min(p[1] for p in red_pts)
    max_y = max(p[1] for p in red_pts)
    print(f'X: {min_x} to {max_x} ({min_x/w*100:.1f}% to {max_x/w*100:.1f}%)')
    print(f'Y: {min_y} to {max_y} ({min_y/h*100:.1f}% to {max_y/h*100:.1f}%)')
    
    # Sample 8 equidistant points along the curve from left to right
    # Sort by x coordinate
    # Or cluster the curve
    # Let's trace from bottom-left (min x, large y), up to peak (min y), and down to right (max x, large y)
    # Left branch: x < (min_x + max_x)/2
    left_branch = [p for p in red_pts if p[0] < (min_x + max_x)*0.45]
    top_branch = [p for p in red_pts if (min_x + max_x)*0.45 <= p[0] <= (min_x + max_x)*0.65]
    right_branch = [p for p in red_pts if p[0] > (min_x + max_x)*0.65]
    
    # Let's divide into 8 segments along the drawn stroke order or arc
    # Sample x at intervals
    xs = [min_x + i * (max_x - min_x) / 7 for i in range(8)]
    for i, target_x in enumerate(xs):
        pts_near_x = [p for p in red_pts if abs(p[0] - target_x) < 15]
        if pts_near_x:
            # take average y
            avg_y = sum(p[1] for p in pts_near_x) / len(pts_near_x)
            print(f'Point {i+1}: x={target_x/w*100:.1f}%, y={avg_y/h*100:.1f}%')
