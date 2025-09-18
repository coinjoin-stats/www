# CoinJoins stats
This repository contains sources and generation scripts for a simple webpage with statistics about coinjoins. 


# Basic info

`structure.json` defines basic structure of the webpage.

`python_scripts/build.py` generates the webpage based on `structure.json` and contents of `figures`

`python_scripts/thumbnails.py` generates smaller versions of images in `figures`

`python_scripts/copy_months.py` serves for copying month statistics. Usage: `python copy_months.py <source path> <destination path> <coordinator name>`