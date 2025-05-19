import os
import datetime
import json

def get_selector(coordinators):
    selector ="""
      <div class="selector">
        <label for="category">Coordinator:</label>
        <select id="category" name="category">
      """
    for c in coordinators:
          selector += f'<option value="{c["dir"]}">{c["name"]}</option>\n'
    selector +="""
        </select>
      </div>
  """
    return selector

def get_header(structure, current_page):
  header = f"""
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>CoinJoin Statistics</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
      <header>
      <h1>CoinJoin Statistics</h1>
      <p class="update">Last updated: {datetime.datetime.today().strftime('%d-%m-%Y')}</p>
      <p>Dataset obtained by monitoring public API:  <a href="https://drive.google.com/drive/folders/1khgqiWnJqd4v30lTrf8d5stCZVRcMeNi?usp=drive_link">Google drive</a> <br>
      Coinjoin datasets and high-resolution visualizations :  <a href="https://drive.google.com/drive/folders/1iT4HqmXLas-x4pxUexgdc-SEyyWLeYzm?usp=sharing">Google drive</a> </p>
      
      <nav class="menu">
        <ul>
  """
  for page,page_details in structure["pages"].items():
          page_name = page_details["name"]
          header += f"""<li><a href="{page}.html" {'class="current"' if page==current_page else ""}>{page_name}</a></li>"""
  
  header +=f"""
        </ul>
      </nav>

{get_selector(structure["pages"][current_page]["coordinators"]) if "coordinators" in structure["pages"][current_page] else ""}

      </header>
  <img src="legend.png" alt="legend" id="legend" />
  <div id="containers">
  """
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
    
    <script src="./js/lightbox.js"></script>
  """
  if script is not None:
       footer += f'    <script src="./js/{script}.js"></script>\n'
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
            thumbnail = "./thumbnails/" + "/".join(filepath.split("/")[2:])

            output += f"""   
        <div class="grid-item">
        <img src="{thumbnail}" data-full="{filepath}" alt="{filename}" />
        </div>
"""
        
        if len(filenames) > 0:
            output += "    </div>\n"
    return output

def selection_script(coordinators, script_name, start_directory):
    flows = """
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
    newline = "\n"
    script = f"""
document.addEventListener("DOMContentLoaded", function () {{
const select = document.getElementById("category");
const container = document.getElementById("containers");

const contentMap = {{
{(","+newline).join(['    '+c["dir"] + ': `' + 
                     traverse_directories(start_directory + "/" + c["dir"], 2)+ 
                     (flows if c["dir"]=="all" else "") + '`'
                     for c in coordinators])}
}};

  function updateContent() {{
    const selectedValue = select.value;
    container.innerHTML = contentMap[selectedValue] || "No content available.";
  }}

  // Load default content
  updateContent();

  // Handle changes
  select.addEventListener("change", updateContent);
}});"""
    
    with open("./js/"+script_name + ".js", "w") as file:
        file.write(script)


if __name__ == "__main__":
    with open("structure.json", "r") as file:
        structure = json.load(file)

    for page,page_details in structure["pages"].items():
      
      if "coordinators" in page_details:
          start_directory = f'./figures/{page}/{page_details["coordinators"][0]["dir"]}'
          selection_script(page_details["coordinators"], page, f'./figures/{page}')
          footer = get_footer(page)    
      
      else:
          start_directory = f"./figures/{page}" 
          footer = get_footer()
      output = get_header(structure, page) + traverse_directories(start_directory, 1) + footer

      with open(f"./{page}.html", "w") as file:
          file.write(output)
