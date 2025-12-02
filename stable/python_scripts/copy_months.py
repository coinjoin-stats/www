import os
import shutil
import re
from datetime import datetime
import sys

# Regex pattern to extract a date like "2022-06-01 00-00-00"
date_pattern = re.compile(r'(\d{4})-(\d{2})-\d{2} \d{2}-\d{2}-\d{2}')

image_whitelist = ["input_types_nums_notnorm.png", "input_types_nums_norm.png", "input_types_values_norm.png", "input_types_values_notnorm.png"]

def is_whitelisted(name):
    for w in image_whitelist:
        if w == name[-len(w):]:
            return True
    return False

def extract_month_year(folder_name):
    match = date_pattern.search(folder_name)
    if match:
        year, month = match.group(1), match.group(2)
        month_name = datetime.strptime(month, "%m").strftime("%B")
        print(month, month_name)
        return f"{year}_{month_name}"
    return None

def copy_png_files(src_subdir, dest_subdir):
    os.makedirs(dest_subdir, exist_ok=True)
    for i, file_name in enumerate(os.listdir(src_subdir)):
        if not is_whitelisted(file_name):
            continue
        if file_name.lower().endswith('.png'):
            src_file = os.path.join(src_subdir, file_name)
            dst_file = os.path.join(dest_subdir, file_name)[:-4]
            with open(dst_file, 'w') as file:
                file.write(src_file[1:])
            

def main(source_dir, target_dir, coordinator):
    index = 0
    for entry in sorted(os.listdir(source_dir), reverse=True):
        src_path = os.path.join(source_dir, entry)
        if os.path.isdir(src_path):
            month_year = extract_month_year(entry)
            if month_year:
                dest_path = os.path.join(target_dir, str(index).zfill(3) + "_" + coordinator + "_-_" + month_year)
                index += 1
                copy_png_files(src_path, dest_path)
                print(f'Copied PNGs from "{entry}" to "{dest_path}"')

if __name__ == '__main__':
    source_dir = sys.argv[1]
    target_dir = sys.argv[2]
    coordinator_name = sys.argv[3]
    main(source_dir, target_dir, coordinator_name)