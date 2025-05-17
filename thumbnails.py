import os
import shutil
from PIL import Image

def resize_image(input_path, output_path, scale=0.5):
    """Resize the image by a given scale factor."""
    with Image.open(input_path) as img:
        if img.height == 900:
            scale = max(scale, 0.2)
        new_size = (int(img.width * scale), int(img.height * scale))
        resized_img = img.resize(new_size)
        resized_img.save(output_path)

def is_image_file(filename):
    """Check if the file is an image based on extension."""
    image_extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.webp']
    return any(filename.lower().endswith(ext) for ext in image_extensions)

def copy_and_resize_images(src_dir, dst_dir, scale=0.5, overwrite=False):
    """Copy directory structure and resize image files."""
    for root, dirs, files in os.walk(src_dir):
        relative_path = os.path.relpath(root, src_dir)
        target_root = os.path.join(dst_dir, relative_path)
        os.makedirs(target_root, exist_ok=True)

        for file in files:
            src_file_path = os.path.join(root, file)
            dst_file_path = os.path.join(target_root, file)

            if is_image_file(file) and (overwrite or not os.path.isfile(dst_file_path)):
                try:
                    resize_image(src_file_path, dst_file_path, scale)
                    print(f"Resized: {dst_file_path}")
                except Exception as e:
                    print(f"Failed to resize {src_file_path}: {e}")
            

# --- Usage ---
source_directory = "./figures/"
destination_directory = "./thumbnails/"
scale_factor = 0.15
o=False

copy_and_resize_images(source_directory, destination_directory, scale=scale_factor, overwrite=o)
