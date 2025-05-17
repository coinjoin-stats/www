
document.addEventListener("DOMContentLoaded", function () {
const select = document.getElementById("category");
const container = document.getElementById("containers");

const contentMap = {
    all: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi1_cummul_values_norm.png" data-full="./figures/wasabi2/all/wasabi1_cummul_values_norm.png" alt="wasabi1_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi1_cummul_nums_norm.png" data-full="./figures/wasabi2/all/wasabi1_cummul_nums_norm.png" alt="wasabi1_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi1_cummul_values_notnorm.png" data-full="./figures/wasabi2/all/wasabi1_cummul_values_notnorm.png" alt="wasabi1_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi1_cummul_nums_notnorm.png" data-full="./figures/wasabi2/all/wasabi1_cummul_nums_notnorm.png" alt="wasabi1_cummul_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_-_2022_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_-_2022_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_-_2022_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_-_2022_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_-_2022_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_-_2022_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_-_2022_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_-_2023_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_-_2023_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_-_2023_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_-_2023_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_-_2023_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_-_2023_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_-_2023_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_-_2023_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_-_2023_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_-_2023_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_-_2023_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2023 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_-_2023_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_-_2024_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_-_2024_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_-_2024_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_-_2024_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_-_2024_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_-_2024_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_-_2024_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_-_2024_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_-_2024_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_-_2024_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_-_2024_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_-_2024_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_-_2025_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_-_2025_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_-_2025_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_-_2025_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_-_2025_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
    </div>
`,
    zksnacks: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_notnorm.png" alt="wasabi2_zksnacks_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_norm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_norm.png" alt="wasabi2_zksnacks_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_norm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_norm.png" alt="wasabi2_zksnacks_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_notnorm.png" alt="wasabi2_zksnacks_cummul_values_notnorm.png" />
        </div>
    </div>
`,
    kruw: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_values_notnorm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_values_notnorm.png" alt="wasabi2_kruw_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_values_norm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_values_norm.png" alt="wasabi2_kruw_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_nums_notnorm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_nums_notnorm.png" alt="wasabi2_kruw_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_nums_norm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_nums_norm.png" alt="wasabi2_kruw_cummul_nums_norm.png" />
        </div>
    </div>
`,
    btip: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_nums_notnorm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_nums_notnorm.png" alt="wasabi2_btip_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_nums_norm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_nums_norm.png" alt="wasabi2_btip_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_values_norm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_values_norm.png" alt="wasabi2_btip_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_values_notnorm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_values_notnorm.png" alt="wasabi2_btip_cummul_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - btip.nl - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_values_norm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_values_norm.png" alt="wasabi2_btip_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_values_notnorm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_values_notnorm.png" alt="wasabi2_btip_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
    </div>
`
};

  function updateContent() {
    const selectedValue = select.value;
    container.innerHTML = contentMap[selectedValue] || "No content available.";
  }

  // Load default content
  updateContent();

  // Handle changes
  select.addEventListener("change", updateContent);
});