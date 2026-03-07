from PIL import Image

try:
    img = Image.open('public/logo.png').convert('RGBA')
    width, height = img.size
    
    # Get alpha data
    alpha = list(img.split()[3].getdata())
    
    # Find bounding box for non-transparent pixels
    min_x = width
    min_y = height
    max_x = 0
    max_y = 0
    
    # Let's do a fast vertical projection
    col_sums = [0]*width
    
    for y in range(height):
        for x in range(width):
            if alpha[y*width + x] > 0:
                col_sums[x] += alpha[y*width + x]
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
                
    # Between min_x and max_x, we want to find a gap. The first gap is after 'P'
    # Wait, 'P' might be a separate icon on the left, not text!
    # Let's just find the first character bounding box.
    start_p = -1
    end_p = -1
    in_char = False
    
    for x in range(min_x, max_x + 1):
        if col_sums[x] > 0:
            if not in_char:
                in_char = True
                if start_p == -1:
                    start_p = x
        else:
            if in_char:
                if end_p == -1 and start_p != -1:
                    # We found the first character/icon
                    # check if the width is at least something decent
                    if x - start_p > 10:
                        end_p = x
                        break # First contiguous non-transparent block!
                in_char = False
                
    if end_p == -1:
        # Default fallback
        end_p = max_x
        start_p = min_x
    
    # It's possible there is no clear vertical gap (e.g. cursive).
    # If the width of the gap is small or doesn't exist, we might have just got the whole text.
    # But usually there's a space or it's a separate icon.
    # In any case, we can also just crop out the leftmost 20% if we fail:
    if end_p - start_p > (width * 0.5):
        # Oops, it probably took the text?
        # A logo 'P' might be around 10-25% of width.
        pass
    
    print(f"Bbox: X1={start_p}, X2={end_p}, Y={min_y}-{max_y}")
    
    # Crop
    # Add a bit of padding if possible
    pad = 5
    crop_x1 = max(0, start_p - pad)
    crop_x2 = min(width, end_p + pad)
    
    cropped = img.crop((crop_x1, min_y, crop_x2, max_y))
    
    # Make square
    cw, ch = cropped.size
    side = max(cw, ch)
    square = Image.new('RGBA', (side, side), (0,0,0,0))
    square.paste(cropped, ((side - cw)//2, (side - ch)//2))
    
    square.save('public/favicon.png', format='PNG')
    square.save('public/favicon.ico', format='ICO', sizes=[(16,16),(32,32),(64,64)])
    print("Done generating.")
except Exception as e:
    print(e)
