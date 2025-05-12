import os

header = """
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
    <p>Dataset obtained by monitoring public API:  <a href="https://drive.google.com/drive/folders/1khgqiWnJqd4v30lTrf8d5stCZVRcMeNi?usp=drive_link">Google drive</a> </p>

    </header>
"""

footer = """

  <div id="lightbox" class="lightbox">
    <span class="close">&times;</span>
    <img class="lightbox-img" id="lightbox-img" src="" alt="Full-size image" />
  </div>
  
  <script>
    // JavaScript to handle lightbox behavior
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    document.querySelectorAll('.grid-item img').forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });
  </script>

</body>
</html>
"""

def traverse_directories(root_dir):
    output = ""
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames.sort()
        dir_name = " ".join(os.path.basename(dirpath).split("_")[1:])
        
        depth = dirpath.count(os.sep)
        if depth > 1:
            output += f"    <h{depth}>" + dir_name + f"</h{depth}>\n\n"
        
        if len(filenames) > 0:
            output += '    <div class="container">'

        for filename in filenames:
            filepath = os.path.join(dirpath, filename)

            output += f"""   
        <div class="grid-item">
        <img src="{filepath}" alt="{filename}" />
        </div>
"""
        
        if len(filenames) > 0:
            output += "    </div>\n\n\n"
    

    return output

# Example usage
if __name__ == "__main__":
    start_directory = "./figures" 
    output = header + traverse_directories(start_directory) + footer

    with open("./index.html", "w") as file:
        file.write(output)
