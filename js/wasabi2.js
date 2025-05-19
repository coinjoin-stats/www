
document.addEventListener("DOMContentLoaded", function () {
const select = document.getElementById("category");
const container = document.getElementById("containers");

const contentMap = {
    all: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi2_cummul_nums_norm.png" data-full="./figures/wasabi2/all/wasabi2_cummul_nums_norm.png" alt="wasabi2_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi2_cummul_values_norm.png" data-full="./figures/wasabi2/all/wasabi2_cummul_values_norm.png" alt="wasabi2_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi2_cummul_nums_notnorm.png" data-full="./figures/wasabi2/all/wasabi2_cummul_nums_notnorm.png" alt="wasabi2_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/wasabi2_cummul_values_notnorm.png" data-full="./figures/wasabi2/all/wasabi2_cummul_values_notnorm.png" alt="wasabi2_cummul_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/000_Wasabi_2_(All_coordinators)_-_2022_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/001_Wasabi_2_(All_coordinators)_-_2022_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/002_Wasabi_2_(All_coordinators)_-_2022_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/003_Wasabi_2_(All_coordinators)_-_2022_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/004_Wasabi_2_(All_coordinators)_-_2022_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/005_Wasabi_2_(All_coordinators)_-_2022_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/006_Wasabi_2_(All_coordinators)_-_2022_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/007_Wasabi_2_(All_coordinators)_-_2023_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/008_Wasabi_2_(All_coordinators)_-_2023_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/009_Wasabi_2_(All_coordinators)_-_2023_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/010_Wasabi_2_(All_coordinators)_-_2023_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/011_Wasabi_2_(All_coordinators)_-_2023_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/012_Wasabi_2_(All_coordinators)_-_2023_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/013_Wasabi_2_(All_coordinators)_-_2023_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/014_Wasabi_2_(All_coordinators)_-_2023_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/015_Wasabi_2_(All_coordinators)_-_2023_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/016_Wasabi_2_(All_coordinators)_-_2023_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/017_Wasabi_2_(All_coordinators)_-_2023_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2023 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/018_Wasabi_2_(All_coordinators)_-_2023_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/019_Wasabi_2_(All_coordinators)_-_2024_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/020_Wasabi_2_(All_coordinators)_-_2024_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/021_Wasabi_2_(All_coordinators)_-_2024_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/022_Wasabi_2_(All_coordinators)_-_2024_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/023_Wasabi_2_(All_coordinators)_-_2024_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/024_Wasabi_2_(All_coordinators)_-_2024_June/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/025_Wasabi_2_(All_coordinators)_-_2024_July/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/026_Wasabi_2_(All_coordinators)_-_2024_August/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/027_Wasabi_2_(All_coordinators)_-_2024_September/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/028_Wasabi_2_(All_coordinators)_-_2024_October/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/029_Wasabi_2_(All_coordinators)_-_2024_November/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/030_Wasabi_2_(All_coordinators)_-_2024_December/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/031_Wasabi_2_(All_coordinators)_-_2025_January/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/032_Wasabi_2_(All_coordinators)_-_2025_February/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/033_Wasabi_2_(All_coordinators)_-_2025_March/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/034_Wasabi_2_(All_coordinators)_-_2025_April/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 (All coordinators) - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_nums_norm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_nums_norm.png" alt="wasabi2_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_values_notnorm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_values_notnorm.png" alt="wasabi2_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_values_norm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_values_norm.png" alt="wasabi2_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_nums_notnorm.png" data-full="./figures/wasabi2/all/035_Wasabi_2_(All_coordinators)_-_2025_May/wasabi2_input_types_nums_notnorm.png" alt="wasabi2_input_types_nums_notnorm.png" />
        </div>
    </div>

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
`,
    zksnacks: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_notnorm.png" alt="wasabi2_zksnacks_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_norm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_values_norm.png" alt="wasabi2_zksnacks_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_norm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_norm.png" alt="wasabi2_zksnacks_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/wasabi2_zksnacks_cummul_nums_notnorm.png" alt="wasabi2_zksnacks_cummul_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/000_Wasabi_2_-_zkSNACKs_-_2022_June/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/001_Wasabi_2_-_zkSNACKs_-_2022_July/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/002_Wasabi_2_-_zkSNACKs_-_2022_August/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/003_Wasabi_2_-_zkSNACKs_-_2022_September/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/004_Wasabi_2_-_zkSNACKs_-_2022_October/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/005_Wasabi_2_-_zkSNACKs_-_2022_November/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/006_Wasabi_2_-_zkSNACKs_-_2022_December/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/007_Wasabi_2_-_zkSNACKs_-_2023_January/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/008_Wasabi_2_-_zkSNACKs_-_2023_February/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/009_Wasabi_2_-_zkSNACKs_-_2023_March/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/010_Wasabi_2_-_zkSNACKs_-_2023_April/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/011_Wasabi_2_-_zkSNACKs_-_2023_May/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/012_Wasabi_2_-_zkSNACKs_-_2023_June/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/013_Wasabi_2_-_zkSNACKs_-_2023_July/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/014_Wasabi_2_-_zkSNACKs_-_2023_August/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/015_Wasabi_2_-_zkSNACKs_-_2023_September/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/016_Wasabi_2_-_zkSNACKs_-_2023_October/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/017_Wasabi_2_-_zkSNACKs_-_2023_November/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2023 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/018_Wasabi_2_-_zkSNACKs_-_2023_December/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/019_Wasabi_2_-_zkSNACKs_-_2024_January/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/020_Wasabi_2_-_zkSNACKs_-_2024_February/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/021_Wasabi_2_-_zkSNACKs_-_2024_March/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/022_Wasabi_2_-_zkSNACKs_-_2024_April/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/023_Wasabi_2_-_zkSNACKs_-_2024_May/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - zkSNACKs - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_nums_norm.png" alt="wasabi2_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_values_norm.png" alt="wasabi2_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_values_notnorm.png" alt="wasabi2_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi2/zksnacks/024_Wasabi_2_-_zkSNACKs_-_2024_June/wasabi2_zksnacks_input_types_nums_notnorm.png" alt="wasabi2_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
`,
    kruw: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_nums_notnorm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_nums_notnorm.png" alt="wasabi2_kruw_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_values_norm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_values_norm.png" alt="wasabi2_kruw_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_nums_norm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_nums_norm.png" alt="wasabi2_kruw_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/wasabi2_kruw_cummul_values_notnorm.png" data-full="./figures/wasabi2/kruw/wasabi2_kruw_cummul_values_notnorm.png" alt="wasabi2_kruw_cummul_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/000_Wasabi_2_-_kruw.io_-_2024_May/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/001_Wasabi_2_-_kruw.io_-_2024_June/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/002_Wasabi_2_-_kruw.io_-_2024_July/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/003_Wasabi_2_-_kruw.io_-_2024_August/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/004_Wasabi_2_-_kruw.io_-_2024_September/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/005_Wasabi_2_-_kruw.io_-_2024_October/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/006_Wasabi_2_-_kruw.io_-_2024_November/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/007_Wasabi_2_-_kruw.io_-_2024_December/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/008_Wasabi_2_-_kruw.io_-_2025_January/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/009_Wasabi_2_-_kruw.io_-_2025_February/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/010_Wasabi_2_-_kruw.io_-_2025_March/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/011_Wasabi_2_-_kruw.io_-_2025_April/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - kruw.io - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_nums_notnorm.png" data-full="./figures/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_nums_notnorm.png" alt="wasabi2_kruw_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_values_notnorm.png" data-full="./figures/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_values_notnorm.png" alt="wasabi2_kruw_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_values_norm.png" data-full="./figures/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_values_norm.png" alt="wasabi2_kruw_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_nums_norm.png" data-full="./figures/wasabi2/kruw/012_Wasabi_2_-_kruw.io_-_2025_May/wasabi2_kruw_input_types_nums_norm.png" alt="wasabi2_kruw_input_types_nums_norm.png" />
        </div>
    </div>
`,
    opencoordinator: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_values_norm.png" data-full="./figures/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_values_norm.png" alt="wasabi2_opencoordinator_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_values_notnorm.png" alt="wasabi2_opencoordinator_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_nums_notnorm.png" alt="wasabi2_opencoordinator_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/wasabi2_opencoordinator_cummul_nums_norm.png" alt="wasabi2_opencoordinator_cummul_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.io_-_2024_May/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/000_Wasabi_2_-_opencoordinator.org_-_2024_May/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.io_-_2024_June/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/001_Wasabi_2_-_opencoordinator.org_-_2024_June/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.io_-_2024_July/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/002_Wasabi_2_-_opencoordinator.org_-_2024_July/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.io_-_2024_August/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/003_Wasabi_2_-_opencoordinator.org_-_2024_August/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.io_-_2024_September/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/004_Wasabi_2_-_opencoordinator.org_-_2024_September/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.io_-_2024_October/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/005_Wasabi_2_-_opencoordinator.org_-_2024_October/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.io_-_2024_November/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/006_Wasabi_2_-_opencoordinator.org_-_2024_November/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.io_-_2024_December/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/007_Wasabi_2_-_opencoordinator.org_-_2024_December/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.io_-_2025_January/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/008_Wasabi_2_-_opencoordinator.org_-_2025_January/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.io_-_2025_February/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/009_Wasabi_2_-_opencoordinator.org_-_2025_February/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.io_-_2025_March/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/010_Wasabi_2_-_opencoordinator.org_-_2025_March/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.io_-_2025_April/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/011_Wasabi_2_-_opencoordinator.org_-_2025_April/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - opencoordinator.org - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_nums_notnorm.png" alt="wasabi2_opencoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_values_notnorm.png" alt="wasabi2_opencoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_nums_norm.png" alt="wasabi2_opencoordinator_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/opencoordinator/012_Wasabi_2_-_opencoordinator.org_-_2025_May/wasabi2_opencoordinator_input_types_values_norm.png" alt="wasabi2_opencoordinator_input_types_values_norm.png" />
        </div>
    </div>
`,
    gingerwallet: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_values_notnorm.png" alt="wasabi2_gingerwallet_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_nums_norm.png" alt="wasabi2_gingerwallet_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_nums_notnorm.png" alt="wasabi2_gingerwallet_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_values_norm.png" data-full="./figures/wasabi2/gingerwallet/wasabi2_gingerwallet_cummul_values_norm.png" alt="wasabi2_gingerwallet_cummul_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_-_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/000_Wasabi_2_gingerwallet.io_-_2024_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_-_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/001_Wasabi_2_gingerwallet.io_-_2024_June/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_-_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/002_Wasabi_2_gingerwallet.io_-_2024_July/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_-_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/003_Wasabi_2_gingerwallet.io_-_2024_August/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_-_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/004_Wasabi_2_gingerwallet.io_-_2024_September/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_-_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/005_Wasabi_2_gingerwallet.io_-_2024_October/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_-_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/006_Wasabi_2_gingerwallet.io_-_2024_November/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_-_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/007_Wasabi_2_gingerwallet.io_-_2024_December/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_-_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/008_Wasabi_2_gingerwallet.io_-_2025_January/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_-_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/009_Wasabi_2_gingerwallet.io_-_2025_February/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_-_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/010_Wasabi_2_gingerwallet.io_-_2025_March/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_-_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 gingerwallet.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/011_Wasabi_2_gingerwallet.io_-_2025_April/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - gingerwallet.io - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_values_notnorm.png" data-full="./figures/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_values_notnorm.png" alt="wasabi2_gingerwallet_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_values_norm.png" data-full="./figures/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_values_norm.png" alt="wasabi2_gingerwallet_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_nums_norm.png" data-full="./figures/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_nums_norm.png" alt="wasabi2_gingerwallet_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" data-full="./figures/wasabi2/gingerwallet/012_Wasabi_2_-_gingerwallet.io_-_2025_May/wasabi2_gingerwallet_input_types_nums_notnorm.png" alt="wasabi2_gingerwallet_input_types_nums_notnorm.png" />
        </div>
    </div>
`,
    btip: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_nums_notnorm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_nums_notnorm.png" alt="wasabi2_btip_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_values_notnorm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_values_notnorm.png" alt="wasabi2_btip_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_values_norm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_values_norm.png" alt="wasabi2_btip_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/wasabi2_btip_cummul_nums_norm.png" data-full="./figures/wasabi2/btip/wasabi2_btip_cummul_nums_norm.png" alt="wasabi2_btip_cummul_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/000_Wasabi_2_-_btip.nl_-_2024_May/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/001_Wasabi_2_-_btip.nl_-_2024_June/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/002_Wasabi_2_-_btip.nl_-_2024_July/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/003_Wasabi_2_-_btip.nl_-_2024_August/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/004_Wasabi_2_-_btip.nl_-_2024_September/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/005_Wasabi_2_-_btip.nl_-_2024_October/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/006_Wasabi_2_-_btip.nl_-_2024_November/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/007_Wasabi_2_-_btip.nl_-_2024_December/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/008_Wasabi_2_-_btip.nl_-_2025_January/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/009_Wasabi_2_-_btip.nl_-_2025_February/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/010_Wasabi_2_-_btip.nl_-_2025_March/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/011_Wasabi_2_-_btip.nl_-_2025_April/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
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
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_notnorm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_notnorm.png" alt="wasabi2_btip_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_norm.png" data-full="./figures/wasabi2/btip/012_Wasabi_2_-_btip.nl_-_2025_May/wasabi2_btip_input_types_nums_norm.png" alt="wasabi2_btip_input_types_nums_norm.png" />
        </div>
    </div>
`,
    coinjoinnl: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_values_norm.png" alt="wasabi2_coinjoin_nl_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_nums_norm.png" alt="wasabi2_coinjoin_nl_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_nums_notnorm.png" alt="wasabi2_coinjoin_nl_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/wasabi2_coinjoin_nl_cummul_values_notnorm.png" alt="wasabi2_coinjoin_nl_cummul_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/000_Wasabi_2_-_coinjoin.nl_-_2024_May/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/001_Wasabi_2_-_coinjoin.nl_-_2024_June/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/002_Wasabi_2_-_coinjoin.nl_-_2024_July/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/003_Wasabi_2_-_coinjoin.nl_-_2024_August/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/004_Wasabi_2_-_coinjoin.nl_-_2024_September/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/005_Wasabi_2_-_coinjoin.nl_-_2024_October/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/006_Wasabi_2_-_coinjoin.nl_-_2024_November/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/007_Wasabi_2_-_coinjoin.nl_-_2024_December/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/008_Wasabi_2_-_coinjoin.nl_-_2025_January/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/009_Wasabi_2_-_coinjoin.nl_-_2025_February/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/010_Wasabi_2_-_coinjoin.nl_-_2025_March/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/011_Wasabi_2_-_coinjoin.nl_-_2025_April/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - coinjoin.nl - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_nums_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_values_notnorm.png" data-full="./figures/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_values_notnorm.png" alt="wasabi2_coinjoin_nl_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_values_norm.png" data-full="./figures/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_values_norm.png" alt="wasabi2_coinjoin_nl_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_nums_norm.png" data-full="./figures/wasabi2/coinjoinnl/012_Wasabi_2_-_coinjoin.nl_-_2025_May/wasabi2_coinjoin_nl_input_types_nums_norm.png" alt="wasabi2_coinjoin_nl_input_types_nums_norm.png" />
        </div>
    </div>
`,
    dragonordnance: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_values_notnorm.png" alt="wasabi2_dragonordnance_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_values_norm.png" data-full="./figures/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_values_norm.png" alt="wasabi2_dragonordnance_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_nums_norm.png" alt="wasabi2_dragonordnance_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/wasabi2_dragonordnance_cummul_nums_notnorm.png" alt="wasabi2_dragonordnance_cummul_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/000_Wasabi_2_-_dragonordnance.com_-_2024_May/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/001_Wasabi_2_-_dragonordnance.com_-_2024_June/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/002_Wasabi_2_-_dragonordnance.com_-_2024_July/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/003_Wasabi_2_-_dragonordnance.com_-_2024_August/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/004_Wasabi_2_-_dragonordnance.com_-_2024_September/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/005_Wasabi_2_-_dragonordnance.com_-_2024_October/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/006_Wasabi_2_-_dragonordnance.com_-_2024_November/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/007_Wasabi_2_-_dragonordnance.com_-_2024_December/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/008_Wasabi_2_-_dragonordnance.com_-_2025_January/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/009_Wasabi_2_-_dragonordnance.com_-_2025_February/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/010_Wasabi_2_-_dragonordnance.com_-_2025_March/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/011_Wasabi_2_-_dragonordnance.com_-_2025_April/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - dragonordnance.com - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_nums_norm.png" data-full="./figures/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_nums_norm.png" alt="wasabi2_dragonordnance_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_nums_notnorm.png" data-full="./figures/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_nums_notnorm.png" alt="wasabi2_dragonordnance_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_values_notnorm.png" data-full="./figures/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_values_notnorm.png" alt="wasabi2_dragonordnance_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_values_norm.png" data-full="./figures/wasabi2/dragonordnance/012_Wasabi_2_-_dragonordnance.com_-_2025_May/wasabi2_dragonordnance_input_types_values_norm.png" alt="wasabi2_dragonordnance_input_types_values_norm.png" />
        </div>
    </div>
`,
    mega: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/wasabi2_mega_cummul_values_norm.png" data-full="./figures/wasabi2/mega/wasabi2_mega_cummul_values_norm.png" alt="wasabi2_mega_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/wasabi2_mega_cummul_nums_notnorm.png" data-full="./figures/wasabi2/mega/wasabi2_mega_cummul_nums_notnorm.png" alt="wasabi2_mega_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/wasabi2_mega_cummul_values_notnorm.png" data-full="./figures/wasabi2/mega/wasabi2_mega_cummul_values_notnorm.png" alt="wasabi2_mega_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/wasabi2_mega_cummul_nums_norm.png" data-full="./figures/wasabi2/mega/wasabi2_mega_cummul_nums_norm.png" alt="wasabi2_mega_cummul_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/000_Wasabi_2_-_mega.cash_-_2024_May/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/001_Wasabi_2_-_mega.cash_-_2024_June/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/002_Wasabi_2_-_mega.cash_-_2024_July/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/003_Wasabi_2_-_mega.cash_-_2024_August/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/004_Wasabi_2_-_mega.cash_-_2024_September/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/005_Wasabi_2_-_mega.cash_-_2024_October/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/006_Wasabi_2_-_mega.cash_-_2024_November/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/007_Wasabi_2_-_mega.cash_-_2024_December/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/008_Wasabi_2_-_mega.cash_-_2025_January/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/009_Wasabi_2_-_mega.cash_-_2025_February/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/010_Wasabi_2_-_mega.cash_-_2025_March/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/011_Wasabi_2_-_mega.cash_-_2025_April/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - mega.cash - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_nums_norm.png" data-full="./figures/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_nums_norm.png" alt="wasabi2_mega_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_nums_notnorm.png" data-full="./figures/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_nums_notnorm.png" alt="wasabi2_mega_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_values_notnorm.png" data-full="./figures/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_values_notnorm.png" alt="wasabi2_mega_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_values_norm.png" data-full="./figures/wasabi2/mega/012_Wasabi_2_-_mega.cash_-_2025_May/wasabi2_mega_input_types_values_norm.png" alt="wasabi2_mega_input_types_values_norm.png" />
        </div>
    </div>
`,
    wasabicoordinator: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_notnorm.png" alt="wasabi2_wasabicoordinator_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_norm.png" alt="wasabi2_wasabicoordinator_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_norm.png" alt="wasabi2_wasabicoordinator_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_notnorm.png" alt="wasabi2_wasabicoordinator_cummul_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/000_Wasabi_2_-_wasabicoordinator.io_-_2024_May/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/001_Wasabi_2_-_wasabicoordinator.io_-_2024_June/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/002_Wasabi_2_-_wasabicoordinator.io_-_2024_July/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/003_Wasabi_2_-_wasabicoordinator.io_-_2024_August/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/004_Wasabi_2_-_wasabicoordinator.io_-_2024_September/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/005_Wasabi_2_-_wasabicoordinator.io_-_2024_October/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/006_Wasabi_2_-_wasabicoordinator.io_-_2024_November/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/007_Wasabi_2_-_wasabicoordinator.io_-_2024_December/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/008_Wasabi_2_-_wasabicoordinator.io_-_2025_January/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/009_Wasabi_2_-_wasabicoordinator.io_-_2025_February/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/010_Wasabi_2_-_wasabicoordinator.io_-_2025_March/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/011_Wasabi_2_-_wasabicoordinator.io_-_2025_April/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabicoordinator.io - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_values_norm.png" data-full="./figures/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_values_norm.png" alt="wasabi2_wasabicoordinator_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_values_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_nums_notnorm.png" alt="wasabi2_wasabicoordinator_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabicoordinator/012_Wasabi_2_-_wasabicoordinator.io_-_2025_May/wasabi2_wasabicoordinator_input_types_nums_norm.png" alt="wasabi2_wasabicoordinator_input_types_nums_norm.png" />
        </div>
    </div>
`,
    wasabist: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/wasabi2_wasabist_cummul_nums_norm.png" data-full="./figures/wasabi2/wasabist/wasabi2_wasabist_cummul_nums_norm.png" alt="wasabi2_wasabist_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/wasabi2_wasabist_cummul_values_notnorm.png" data-full="./figures/wasabi2/wasabist/wasabi2_wasabist_cummul_values_notnorm.png" alt="wasabi2_wasabist_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/wasabi2_wasabist_cummul_values_norm.png" data-full="./figures/wasabi2/wasabist/wasabi2_wasabist_cummul_values_norm.png" alt="wasabi2_wasabist_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/wasabi2_wasabist_cummul_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/wasabi2_wasabist_cummul_nums_notnorm.png" alt="wasabi2_wasabist_cummul_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/000_Wasabi_2_-_wasabist.io_-_2024_May/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/001_Wasabi_2_-_wasabist.io_-_2024_June/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/002_Wasabi_2_-_wasabist.io_-_2024_July/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/003_Wasabi_2_-_wasabist.io_-_2024_August/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/004_Wasabi_2_-_wasabist.io_-_2024_September/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/005_Wasabi_2_-_wasabist.io_-_2024_October/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/006_Wasabi_2_-_wasabist.io_-_2024_November/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/007_Wasabi_2_-_wasabist.io_-_2024_December/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/008_Wasabi_2_-_wasabist.io_-_2025_January/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/009_Wasabi_2_-_wasabist.io_-_2025_February/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/010_Wasabi_2_-_wasabist.io_-_2025_March/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/011_Wasabi_2_-_wasabist.io_-_2025_April/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 2 - wasabist.io - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_nums_norm.png" data-full="./figures/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_nums_norm.png" alt="wasabi2_wasabist_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_nums_notnorm.png" data-full="./figures/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_nums_notnorm.png" alt="wasabi2_wasabist_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_values_norm.png" data-full="./figures/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_values_norm.png" alt="wasabi2_wasabist_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_values_notnorm.png" data-full="./figures/wasabi2/wasabist/012_Wasabi_2_-_wasabist.io_-_2025_May/wasabi2_wasabist_input_types_values_notnorm.png" alt="wasabi2_wasabist_input_types_values_notnorm.png" />
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