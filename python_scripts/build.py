import os
import datetime
import json

def get_selector(coordinators, current, page):
    selector = "<div id='subnav'> <ul>"
    for coordinator in coordinators:
        selector += f"""<li><a href="{page}/{coordinator["dir"]}.html" {'class="current"' if coordinator["dir"]==current else ""}>{coordinator["name"]}</a></li>"""
    selector += "</div> </ul>"
    return selector

def get_header(structure, current_page, current_coordinator=None, base=None):
    if os.path.isfile(f"./summary.json"):
        with open(f"./summary.json", "r") as file:
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
      <p class=banner>Nightly version updated every day available at <a href=https://coinjoin-stats.github.io/www/nightly/index.html>https://coinjoin-stats.github.io/www/nightly/index.html</a></p>
      <header>
      <h1>CoinJoin Statistics</h1>
      <p class="update">Last updated: {date} </p>
      <p>Dataset obtained by monitoring public API:  <a href="https://drive.google.com/drive/folders/1khgqiWnJqd4v30lTrf8d5stCZVRcMeNi?usp=drive_link">Google drive</a> <br>

      <nav class="menu">
        <ul>
    """
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
        if os.path.isfile(f"/home/xsvenda/public_html/cjs/stable/texts/{current_page}.txt"):
            with open(f"/home/xsvenda/public_html/cjs/stable/texts/{current_page}.txt", "r") as file:
                text = file.read()
                header += f"""<div class="container"><div class="text"><p>{text}</p></div></div>"""
    else:
        if os.path.isfile(f'/home/xsvenda/public_html/cjs/stable/texts/{current_page + "_" + current_coordinator}.txt'):
            with open(f'/home/xsvenda/public_html/cjs/stable/texts/{current_page + "_" + current_coordinator}.txt', "r") as file:
                text = file.read()
                header += f"""<div class="container"><div class="text"><p>{text}</p></div></div>"""

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

def traverse_directories(root_dir, starting_depth):
    print(root_dir)
    output = ''
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames.sort()
        dir_name = " ".join(os.path.basename(dirpath).split("_")[1:])
        
        depth = dirpath.count(os.sep) - starting_depth
        if depth > 1:
            output += f"    <h{depth}>" + dir_name + f"</h{depth}>\n\n"
        
        if len(filenames) > 0:
            output += '    <div class="container">'

        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            with open(filepath, "r") as file:
                imgpath = file.readline()
                if imgpath[0] == "/":
                    imgpath = imgpath[1:]

            output += f"""   
        <div class="grid-item">
        <img src="https://www.fi.muni.cz/~xsvenda/cjs/stable_t/{imgpath}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             data-full="https://www.fi.muni.cz/~xsvenda/cjs/stable/{imgpath}?v{datetime.datetime.today().strftime('%Y-%m-%d')}" 
             alt="{imgpath}" loading="lazy" />
        </div>
"""
        
        if len(filenames) > 0:
            output += "    </div>\n"
    return output


if __name__ == "__main__":
    base = "https://coinjoin-stats.github.io/www/"
    with open("structure.json", "r") as file:
        structure = json.load(file)

    for page,page_details in structure["pages"].items():
      
        if "coordinators" in page_details:
            os.makedirs(f"./{page}", exist_ok=True)
          
            for coordinator in page_details["coordinators"]:
                start_directory = f'./figures/{page}/{coordinator["dir"]}'

                output = get_header(structure, page, coordinator["dir"], base=base) + traverse_directories(start_directory, 1) + get_footer()

                with open(f'./{page}/{coordinator["dir"]}.html', "w") as file:
                    file.write(output)

      
        else:
            start_directory = f"./figures/{page}" 
            output = get_header(structure, page, base=base) + traverse_directories(start_directory, 1) + get_footer()

            with open(f"./{page}.html", "w") as file:
                file.write(output)

