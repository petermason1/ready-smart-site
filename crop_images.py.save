from PIL import Image
import os

input_dir = './input_images'
output_dir = './cropped_images'
target_width = 800
target_height = 450

def crop_center(img, crop_w, crop_h):
    img_w, img_h = img.size
    target_aspect = crop_w / crop_h
    img_aspect = img_w / img_h

    if img_aspect > target_aspect:
        new_w = int(img_h * target_aspect)
        left = (img_w - new_w) // 2
        box = (left, 0, left + new_w, img_h)
    else:
        new_h = int(img_w / target_aspect)
        top = (img_h - new_h) // 2
        box = (0, top, img_w, top + new_h)
    return img.crop(box)

os.makedirs(output_dir, exist_ok=True)

for filename in os.listdir(input_dir):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        path = os.path.join(input_dir, filename)
        img = Image.open(path).convert('RGB')
        img_cropped = crop_center(img, target_width, target_height)
        img_resized = img_cropped.resize((target_width, target_height), Image.LANCZOS)
        out_name = os.path.splitext(filename)[0] + '_cropped.jpg'
        out_path = os.path.join(output_dir, out_name)
        img_resized.save(out_path, quality=92)
        print(f'Cropped and saved: {out_path}')
print('All done! 🎉')

