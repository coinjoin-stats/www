
document.addEventListener("DOMContentLoaded", function () {
const select = document.getElementById("category");
const container = document.getElementById("containers");

const contentMap = {
    all: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/wasabi1_cummul_nums_notnorm.png" data-full="./figures/wasabi1/all/wasabi1_cummul_nums_notnorm.png" alt="wasabi1_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/wasabi1_cummul_values_notnorm.png" data-full="./figures/wasabi1/all/wasabi1_cummul_values_notnorm.png" alt="wasabi1_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/wasabi1_cummul_values_norm.png" data-full="./figures/wasabi1/all/wasabi1_cummul_values_norm.png" alt="wasabi1_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/wasabi1_cummul_nums_norm.png" data-full="./figures/wasabi1/all/wasabi1_cummul_nums_norm.png" alt="wasabi1_cummul_nums_norm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/000_Wasabi_1_(All_coordinators)_-_2018_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/001_Wasabi_1_(All_coordinators)_-_2018_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/002_Wasabi_1_(All_coordinators)_-_2018_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/003_Wasabi_1_(All_coordinators)_-_2018_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/004_Wasabi_1_(All_coordinators)_-_2018_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2018 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/005_Wasabi_1_(All_coordinators)_-_2018_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/006_Wasabi_1_(All_coordinators)_-_2019_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/007_Wasabi_1_(All_coordinators)_-_2019_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/008_Wasabi_1_(All_coordinators)_-_2019_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/009_Wasabi_1_(All_coordinators)_-_2019_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/010_Wasabi_1_(All_coordinators)_-_2019_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/011_Wasabi_1_(All_coordinators)_-_2019_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/012_Wasabi_1_(All_coordinators)_-_2019_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/013_Wasabi_1_(All_coordinators)_-_2019_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/014_Wasabi_1_(All_coordinators)_-_2019_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/015_Wasabi_1_(All_coordinators)_-_2019_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/016_Wasabi_1_(All_coordinators)_-_2019_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2019 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/017_Wasabi_1_(All_coordinators)_-_2019_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/018_Wasabi_1_(All_coordinators)_-_2020_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/019_Wasabi_1_(All_coordinators)_-_2020_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/020_Wasabi_1_(All_coordinators)_-_2020_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/021_Wasabi_1_(All_coordinators)_-_2020_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/022_Wasabi_1_(All_coordinators)_-_2020_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/023_Wasabi_1_(All_coordinators)_-_2020_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/024_Wasabi_1_(All_coordinators)_-_2020_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/025_Wasabi_1_(All_coordinators)_-_2020_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/026_Wasabi_1_(All_coordinators)_-_2020_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/027_Wasabi_1_(All_coordinators)_-_2020_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/028_Wasabi_1_(All_coordinators)_-_2020_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2020 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/029_Wasabi_1_(All_coordinators)_-_2020_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/030_Wasabi_1_(All_coordinators)_-_2021_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/031_Wasabi_1_(All_coordinators)_-_2021_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/032_Wasabi_1_(All_coordinators)_-_2021_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/033_Wasabi_1_(All_coordinators)_-_2021_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/034_Wasabi_1_(All_coordinators)_-_2021_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/035_Wasabi_1_(All_coordinators)_-_2021_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/036_Wasabi_1_(All_coordinators)_-_2021_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/037_Wasabi_1_(All_coordinators)_-_2021_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/038_Wasabi_1_(All_coordinators)_-_2021_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/039_Wasabi_1_(All_coordinators)_-_2021_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/040_Wasabi_1_(All_coordinators)_-_2021_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2021 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/041_Wasabi_1_(All_coordinators)_-_2021_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/042_Wasabi_1_(All_coordinators)_-_2022_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/043_Wasabi_1_(All_coordinators)_-_2022_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/044_Wasabi_1_(All_coordinators)_-_2022_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/045_Wasabi_1_(All_coordinators)_-_2022_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/046_Wasabi_1_(All_coordinators)_-_2022_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/047_Wasabi_1_(All_coordinators)_-_2022_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/048_Wasabi_1_(All_coordinators)_-_2022_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/049_Wasabi_1_(All_coordinators)_-_2022_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/050_Wasabi_1_(All_coordinators)_-_2022_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/051_Wasabi_1_(All_coordinators)_-_2022_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/052_Wasabi_1_(All_coordinators)_-_2022_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/053_Wasabi_1_(All_coordinators)_-_2022_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/054_Wasabi_1_(All_coordinators)_-_2023_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/055_Wasabi_1_(All_coordinators)_-_2023_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/056_Wasabi_1_(All_coordinators)_-_2023_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/057_Wasabi_1_(All_coordinators)_-_2023_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/058_Wasabi_1_(All_coordinators)_-_2023_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/059_Wasabi_1_(All_coordinators)_-_2023_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/060_Wasabi_1_(All_coordinators)_-_2023_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/061_Wasabi_1_(All_coordinators)_-_2023_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/062_Wasabi_1_(All_coordinators)_-_2023_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/063_Wasabi_1_(All_coordinators)_-_2023_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/064_Wasabi_1_(All_coordinators)_-_2023_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2023 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/065_Wasabi_1_(All_coordinators)_-_2023_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/066_Wasabi_1_(All_coordinators)_-_2024_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/067_Wasabi_1_(All_coordinators)_-_2024_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/068_Wasabi_1_(All_coordinators)_-_2024_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/069_Wasabi_1_(All_coordinators)_-_2024_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/070_Wasabi_1_(All_coordinators)_-_2024_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/071_Wasabi_1_(All_coordinators)_-_2024_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/072_Wasabi_1_(All_coordinators)_-_2024_July/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/073_Wasabi_1_(All_coordinators)_-_2024_August/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/074_Wasabi_1_(All_coordinators)_-_2024_September/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/075_Wasabi_1_(All_coordinators)_-_2024_October/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/076_Wasabi_1_(All_coordinators)_-_2024_November/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2024 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/077_Wasabi_1_(All_coordinators)_-_2024_December/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/078_Wasabi_1_(All_coordinators)_-_2025_January/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/079_Wasabi_1_(All_coordinators)_-_2025_February/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/080_Wasabi_1_(All_coordinators)_-_2025_March/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/081_Wasabi_1_(All_coordinators)_-_2025_April/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/082_Wasabi_1_(All_coordinators)_-_2025_May/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 (All coordinators) - 2025 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_nums_norm.png" data-full="./figures/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_nums_norm.png" alt="wasabi1_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_values_norm.png" data-full="./figures/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_values_norm.png" alt="wasabi1_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_values_notnorm.png" data-full="./figures/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_values_notnorm.png" alt="wasabi1_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_nums_notnorm.png" data-full="./figures/wasabi1/all/083_Wasabi_1_(All_coordinators)_-_2025_June/wasabi1_input_types_nums_notnorm.png" alt="wasabi1_input_types_nums_notnorm.png" />
        </div>
    </div>
`,
    zksnacks: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/wasabi1_zksnacks_cummul_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/wasabi1_zksnacks_cummul_values_notnorm.png" alt="wasabi1_zksnacks_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/wasabi1_zksnacks_cummul_values_norm.png" data-full="./figures/wasabi1/zksnacks/wasabi1_zksnacks_cummul_values_norm.png" alt="wasabi1_zksnacks_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/wasabi1_zksnacks_cummul_nums_norm.png" data-full="./figures/wasabi1/zksnacks/wasabi1_zksnacks_cummul_nums_norm.png" alt="wasabi1_zksnacks_cummul_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/wasabi1_zksnacks_cummul_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/wasabi1_zksnacks_cummul_nums_notnorm.png" alt="wasabi1_zksnacks_cummul_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/000_Wasabi_1_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/000_zkSNACKs_-_2018_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/001_Wasabi_1_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/001_zkSNACKs_-_2018_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/002_Wasabi_1_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/002_zkSNACKs_-_2018_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/003_Wasabi_1_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/003_zkSNACKs_-_2018_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/004_Wasabi_1_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/004_zkSNACKs_-_2018_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2018 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/005_Wasabi_1_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2018 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/005_zkSNACKs_-_2018_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/006_Wasabi_1_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/006_zkSNACKs_-_2019_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/007_Wasabi_1_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/007_zkSNACKs_-_2019_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/008_Wasabi_1_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/008_zkSNACKs_-_2019_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/009_Wasabi_1_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/009_zkSNACKs_-_2019_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/010_Wasabi_1_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/010_zkSNACKs_-_2019_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/011_Wasabi_1_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/011_zkSNACKs_-_2019_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/012_Wasabi_1_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/012_zkSNACKs_-_2019_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/013_Wasabi_1_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/013_zkSNACKs_-_2019_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/014_Wasabi_1_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/014_zkSNACKs_-_2019_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/015_Wasabi_1_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/015_zkSNACKs_-_2019_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/016_Wasabi_1_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/016_zkSNACKs_-_2019_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2019 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/017_Wasabi_1_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2019 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/017_zkSNACKs_-_2019_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/018_Wasabi_1_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/018_zkSNACKs_-_2020_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/019_Wasabi_1_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/019_zkSNACKs_-_2020_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/020_Wasabi_1_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/020_zkSNACKs_-_2020_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/021_Wasabi_1_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/021_zkSNACKs_-_2020_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/022_Wasabi_1_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/022_zkSNACKs_-_2020_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/023_Wasabi_1_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/023_zkSNACKs_-_2020_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/024_Wasabi_1_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/024_zkSNACKs_-_2020_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/025_Wasabi_1_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/025_zkSNACKs_-_2020_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/026_Wasabi_1_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/026_zkSNACKs_-_2020_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/027_Wasabi_1_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/027_zkSNACKs_-_2020_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/028_Wasabi_1_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/028_zkSNACKs_-_2020_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2020 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/029_Wasabi_1_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2020 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/029_zkSNACKs_-_2020_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/030_Wasabi_1_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/030_zkSNACKs_-_2021_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/031_Wasabi_1_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/031_zkSNACKs_-_2021_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/032_Wasabi_1_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/032_zkSNACKs_-_2021_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/033_Wasabi_1_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/033_zkSNACKs_-_2021_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/034_Wasabi_1_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/034_zkSNACKs_-_2021_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/035_Wasabi_1_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/035_zkSNACKs_-_2021_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/036_Wasabi_1_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/036_zkSNACKs_-_2021_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/037_Wasabi_1_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/037_zkSNACKs_-_2021_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/038_Wasabi_1_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/038_zkSNACKs_-_2021_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/039_Wasabi_1_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/039_zkSNACKs_-_2021_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/040_Wasabi_1_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/040_zkSNACKs_-_2021_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2021 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/041_Wasabi_1_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2021 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/041_zkSNACKs_-_2021_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/042_Wasabi_1_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/042_zkSNACKs_-_2022_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/043_Wasabi_1_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/043_zkSNACKs_-_2022_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/044_Wasabi_1_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/044_zkSNACKs_-_2022_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/045_Wasabi_1_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/045_zkSNACKs_-_2022_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/046_Wasabi_1_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/046_zkSNACKs_-_2022_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/047_Wasabi_1_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/047_zkSNACKs_-_2022_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/048_Wasabi_1_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/048_zkSNACKs_-_2022_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/049_Wasabi_1_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/049_zkSNACKs_-_2022_August/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/050_Wasabi_1_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/050_zkSNACKs_-_2022_September/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/051_Wasabi_1_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/051_zkSNACKs_-_2022_October/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/052_Wasabi_1_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/052_zkSNACKs_-_2022_November/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/053_Wasabi_1_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2022 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/053_zkSNACKs_-_2022_December/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/054_Wasabi_1_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/054_zkSNACKs_-_2023_January/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/055_Wasabi_1_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 February</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/055_zkSNACKs_-_2023_February/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/056_Wasabi_1_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 March</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/056_zkSNACKs_-_2023_March/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/057_Wasabi_1_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 April</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/057_zkSNACKs_-_2023_April/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/058_Wasabi_1_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 May</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/058_zkSNACKs_-_2023_May/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/059_Wasabi_1_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 June</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/059_zkSNACKs_-_2023_June/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 zkSNACKs - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/060_Wasabi_1_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
    <h2>zkSNACKs - 2023 July</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_norm.png" data-full="./figures/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_norm.png" alt="wasabi1_zksnacks_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_notnorm.png" data-full="./figures/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_values_notnorm.png" alt="wasabi1_zksnacks_input_types_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_norm.png" data-full="./figures/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_norm.png" alt="wasabi1_zksnacks_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_notnorm.png" data-full="./figures/wasabi1/zksnacks/060_zkSNACKs_-_2023_July/wasabi1_zksnacks_input_types_nums_notnorm.png" alt="wasabi1_zksnacks_input_types_nums_notnorm.png" />
        </div>
    </div>
`,
    mystery: `    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/wasabi1_mystery_cummul_values_norm.png" data-full="./figures/wasabi1/mystery/wasabi1_mystery_cummul_values_norm.png" alt="wasabi1_mystery_cummul_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/wasabi1_mystery_cummul_nums_notnorm.png" data-full="./figures/wasabi1/mystery/wasabi1_mystery_cummul_nums_notnorm.png" alt="wasabi1_mystery_cummul_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/wasabi1_mystery_cummul_values_notnorm.png" data-full="./figures/wasabi1/mystery/wasabi1_mystery_cummul_values_notnorm.png" alt="wasabi1_mystery_cummul_values_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/wasabi1_mystery_cummul_nums_norm.png" data-full="./figures/wasabi1/mystery/wasabi1_mystery_cummul_nums_norm.png" alt="wasabi1_mystery_cummul_nums_norm.png" />
        </div>
    </div>
    <h2>Mystery - 2018 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/000_Mystery_-_2018_August/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2018 August</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/000_Wasabi_1_Mystery_-_2018_August/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Mystery - 2018 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/001_Mystery_-_2018_September/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2018 September</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/001_Wasabi_1_Mystery_-_2018_September/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Mystery - 2018 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/002_Mystery_-_2018_October/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2018 October</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/002_Wasabi_1_Mystery_-_2018_October/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Mystery - 2018 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/003_Mystery_-_2018_November/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2018 November</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/003_Wasabi_1_Mystery_-_2018_November/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Mystery - 2018 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/004_Mystery_-_2018_December/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2018 December</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/004_Wasabi_1_Mystery_-_2018_December/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Mystery - 2019 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/005_Mystery_-_2019_January/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
        </div>
    </div>
    <h2>Wasabi 1 Mystery - 2019 January</h2>

    <div class="container">   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_values_norm.png" data-full="./figures/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_values_norm.png" alt="wasabi1_mystery_input_types_values_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_norm.png" data-full="./figures/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_norm.png" alt="wasabi1_mystery_input_types_nums_norm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_notnorm.png" data-full="./figures/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_nums_notnorm.png" alt="wasabi1_mystery_input_types_nums_notnorm.png" />
        </div>
   
        <div class="grid-item">
        <img src="./thumbnails/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_values_notnorm.png" data-full="./figures/wasabi1/mystery/005_Wasabi_1_Mystery_-_2019_January/wasabi1_mystery_input_types_values_notnorm.png" alt="wasabi1_mystery_input_types_values_notnorm.png" />
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