import os
import datetime
import json
import re

image_whitelist = ["input_types_nums_notnorm.png", "input_types_nums_norm.png", "input_types_values_norm.png", "input_types_values_notnorm.png",
                "cummul_values_norm.png", "cummul_values_notnorm.png", "cummul_nums_norm.png", "cummul_nums_notnorm.png"]

def is_whitelisted(name):
    for w in image_whitelist:
        if w == name[-len(w):]:
            return True
    return False

def extract_month_year(folder_name):
    # Regex pattern to extract a date like "2022-06-01 00-00-00"
    date_pattern = re.compile(r'(\d{4})-(\d{2})-\d{2} \d{2}-\d{2}-\d{2}')

    match = date_pattern.search(folder_name)
    if match:
        year, month = match.group(1), match.group(2)
        month_name = datetime.datetime.strptime(month, "%m").strftime("%B")
        return f"{month_name} {year}"
    return None


def get_selector(coordinators, current, page):
    selector = "<div id='subnav'> <ul>"
    for coordinator in coordinators:
        selector += f"""<li><a href="{page}/{coordinator["dir"]}.html" class="{'current' if coordinator["dir"]==current else ""} {'active' if "active" in coordinator and coordinator["active"] == True else ""}" >{coordinator["name"]}</a></li>"""
    selector += "</div> </ul>"
    return selector

def get_header(structure, current_page, data_source, current_coordinator=None, base=None):
    if os.path.isfile(f"{data_source}/summary.json"):
        with open(f"{data_source}/summary.json", "r") as file:
            date = json.load(file)["date"]
    else:
        date = datetime.datetime.today().strftime('%d-%m-%Y')

    header = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>CoinJoin Statistics</title>
    <base href="{base}"/>
    <link rel="stylesheet" href="style.css?v1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
        <p class=banner>This is a nightly build. For a stable version visit: <a href=https://coinjoin-stats.github.io/www/index.html>https://coinjoin-stats.github.io/www/index.html</a></p>
        <header>
        <h1>CoinJoin Statistics</h1>
        <p class="update">Last updated: {date}</p>

        <nav class="menu">
        <ul>
    """
    #         <p>Dataset obtained by monitoring public API:  <a href="https://drive.google.com/drive/folders/1khgqiWnJqd4v30lTrf8d5stCZVRcMeNi?usp=drive_link">Google drive</a> <br>
    for page,page_details in structure["pages"].items():
        page_dir = page
        if "coordinators" in page_details:
            page_dir += "/" + page_details["coordinators"][0]["dir"]
        header += f"""<li><a href="{page_dir}.html" {'class="current"' if page==current_page else ""}>{page_details["name"]}</a></li>"""
  
    header +=f"""
        </ul>
        </nav>
    {get_selector(structure["pages"][current_page]["coordinators"], current_coordinator, current_page) if "coordinators" in structure["pages"][current_page] else ""}
        </header>
    <img src="legend.png" alt="legend" id="legend" />
    <div id="containers">
    """
    if current_coordinator is None:
        if os.path.isfile(f"/home/xsvenda/public_html/cjs/nightly/texts/{current_page}.html"):
            with open(f"/home/xsvenda/public_html/cjs/nightly/texts/{current_page}.html", "r") as file:
                text = file.read()
                header += f"""<div class="container"><div class="text">{text}</div></div>"""
        else:
            print(f"/home/xsvenda/public_html/cjs/nightly/texts/{current_page}.html", "Not found")
    else:
        if os.path.isfile(f'/home/xsvenda/public_html/cjs/nightly/texts/{current_coordinator}.html'):
            with open(f'/home/xsvenda/public_html/cjs/nightly/texts/{current_coordinator}.html', "r") as file:
                print(f'/home/xsvenda/public_html/cjs/nightly/texts/{current_coordinator}.html')
                text = file.read()
                header += f"""<div class="container"><div class="text">{text}</div></div>"""
        else:
            print(f'/home/xsvenda/public_html/cjs/nightly/texts/{current_coordinator}.html', "Not found")

    return header


def get_footer(script=None):
  footer = """
    </div>
    <div id="lightbox">
      <span class="close">&times;</span>
      <span class="arrow left">&#10094;</span>
      <img id="lightbox-img" src="" alt="">
      <span class="arrow right">&#10095;</span>
    </div>
    
    <script src="./js/lightbox.js?v1"></script>
  """
  if script is not None:
       footer += f'    <script src="./js/{script}.js?v1"></script>\n'
  footer+="""
  </body>
  </html>
  """
  return footer

def get_img_block(imgpath):
    return f"""   
        <div class="grid-item">
        <img src="https://www.fi.muni.cz/~xsvenda/cjs/nightly_t/{imgpath}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             data-full="https://www.fi.muni.cz/~xsvenda/cjs/nightly/{imgpath}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             alt="{imgpath}" loading="lazy" />
        </div>
"""

def traverse_directories(root_dir, base_dir, name_start):
    print(root_dir)
    base_depth = base_dir.count(os.sep)
    output = ''
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames.sort(reverse=True)
        dir_name = os.path.basename(dirpath)
        
        depth = dirpath.count(os.sep) - base_depth
        if depth > 0:
            month_year = extract_month_year(dir_name)

            if month_year is not None:
                output += f"    <h{depth + 1}>" + name_start + month_year + f"</h{depth + 1}>\n\n"
            else:
                output += f"    <h{depth + 1}>" + name_start + dir_name + f"</h{depth + 1}>\n\n"
        
        if len(filenames) > 0:
            output += '    <div class="container">'

        for filename in filenames:
            if not is_whitelisted(filename):
                continue
            filepath = os.path.join(dirpath, filename)
            imgpath = os.path.relpath(filepath, start=base_dir)

            output += get_img_block(imgpath)
        
        if len(filenames) > 0:
            output += "    </div>\n"
    return output


def get_large_images(images):
    result = ""
    for img in images:
        result += f"""<div class='container'> <div class='large'> 
        <img src="https://www.fi.muni.cz/~xsvenda/cjs/nightly/{img}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             data-full="https://www.fi.muni.cz/~xsvenda/cjs/nightly/{img}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             alt="{img}" loading="lazy" />
         </div> </div>\n"""
    
    return result


if __name__ == "__main__":
    with open("structure.json", "r") as file:
        structure = json.load(file)

    image_source = structure["image_source"]
    base = structure["web_base"]

    for page,page_details in structure["pages"].items():
      
        if "coordinators" in page_details:
            os.makedirs(f"./{page}", exist_ok=True)
          
            for coordinator in page_details["coordinators"]:
                start_directory = f'{image_source}{coordinator["dir"]}'

                output = get_header(structure, page, image_source, current_coordinator=coordinator["dir"], base=base)

                if page_details["coordinators"][coordinator].get("large_images") is not None:
                    output += get_large_images(page_details["coordinators"][coordinator].get("large_images"))
                
                output += traverse_directories(start_directory, image_source, page_details["name"] + " - " + coordinator["name"] + " - ") 

                if page == "wasabi2" and coordinator["dir"] == "wasabi2":
                    output += """
                    <h2>Flows</h2>
                    
                    <iframe src="./flows/coordinator_flows_counts_.html">
                        Your browser does not support iframes.
                    </iframe>
                    <iframe src="./flows/coordinator_flows_values_.html">
                        Your browser does not support iframes.
                    </iframe>
                    <iframe src="./flows/coordinator_flows_values_incl_zksnacks.html">
                        Your browser does not support iframes.
                    </iframe>
                """

                output += get_footer()

                with open(f'./{page}/{coordinator["dir"]}.html', "w") as file:
                    file.write(output)

      
        else:
            header = get_header(structure, page, image_source, base=base)
            footer = get_footer()

            if "paths" in structure["pages"][page]:
                body = '<div class="container">'
                for path in structure["pages"][page]["paths"]:
                    body += get_img_block(path)
                body += "    </div>\n"
            
            else:
                if structure["pages"][page].get("large_images") is not None:
                    body += get_large_images(structure["pages"][page].get("large_images"))

                start_directory = f'{image_source}{structure["pages"][page]["dir"]}' 
                body += traverse_directories(start_directory, image_source, page_details["name"] + " - ") 

            output = header + body + footer

            with open(f"./{page}.html", "w") as file:
                file.write(output)
