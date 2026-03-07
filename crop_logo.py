from PIL import Image
import numpy as np
import cv2

# Load image
img = Image.open('public/logo.png').convert('RGBA')
img_np = np.array(img)

# Extract alpha channel
alpha = img_np[:, :, 3]

# Find bounding box of all non-transparent pixels
coords = cv2.findNonZero(alpha)
x, y, w, h = cv2.boundingRect(coords)

# Crop to the right before the 'a' in Payweek. Usually the 'P' is visually distinct or is the first component.
# Let's use connected components on the alpha channel
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(alpha, 8, cv2.CV_32S)

# Skip background (label 0)
# Find the leftmost component that is reasonably large
leftmost_idx = -1
min_x = img_np.shape[1]

for i in range(1, num_labels):
    x_i, y_i, w_i, h_i, area = stats[i]
    if area > 100: # Filter small noise
        if x_i < min_x:
            min_x = x_i
            leftmost_idx = i

if leftmost_idx != -1:
    x_p, y_p, w_p, h_p, _ = stats[leftmost_idx]
    
    # Expand crop slightly
    padding = 10
    x_start = max(0, x_p - padding)
    y_start = max(0, y_p - padding)
    x_end = min(img_np.shape[1], x_p + w_p + padding)
    y_end = min(img_np.shape[0], y_p + h_p + padding)
    
    # Crop
    cropped = img.crop((x_start, y_start, x_end, y_end))
    
    # Make it square
    width, height = cropped.size
    size = max(width, height)
    new_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    new_img.paste(cropped, ((size - width) // 2, (size - height) // 2))
    
    # Save as favicon
    new_img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    new_img.resize((32, 32)).save('public/favicon.png')
    print("Favicon created successfully.")
else:
    print("Could not find components.")

