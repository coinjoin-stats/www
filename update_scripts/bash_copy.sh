#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: No argument provided."
    echo "Usage: $0 [stable|nightly]"
    exit 1
fi

# Check if argument is valid
if [ "$1" != "stable" ] && [ "$1" != "nightly" ]; then
    echo "Error: Invalid argument '$1'. Must be 'stable' or 'nightly'."
    exit 1
fi



create_file_with_text() {
    local file_path="$1"
    local text="$2"

    # Ensure parent directory exists
    mkdir -p "$(dirname "$file_path")"

    # Write the text into the file
    echo "$text" > "$file_path"
}

# add directories
if [ "$1" = "stable" ]; then
    BASE_DIR="[...]/www/"
    DATA_SOURCE=""
else
    BASE_DIR="[...]/www/nightly"
    DATA_SOURCE=""
fi


cd $BASE_DIR

echo "creating $1 figures"

rm -r ./figures/

# copy file with update date
cp $DATA_SOURCE/summary.json ./summary.json

# create main directories
mkdir ./figures

mkdir ./figures/index
mkdir ./figures/ashigaru
mkdir ./figures/joinmarket
mkdir ./figures/wasabi1
mkdir ./figures/wasabi2
mkdir ./figures/whirlpool


# create index images
create_file_with_text ./figures/index/wasabi2_cummul_values_norm /wasabi2/wasabi2_cummul_values_norm.png
create_file_with_text ./figures/index/joinmarket_all_cummul_values_norm /joinmarket_all/joinmarket_all_cummul_values_norm.png
create_file_with_text ./figures/index/wasabi1_cummul_values_norm /wasabi1/wasabi1_cummul_values_norm.png
create_file_with_text ./figures/index/whirlpool_cummul_values_norm /whirlpool/whirlpool_cummul_values_norm.png


# ashigaru
mkdir ./figures/ashigaru/s2p5M
mkdir ./figures/ashigaru/s25M

create_file_with_text ./figures/ashigaru/s2p5M/whirlpool_ashigaru_2_5M_cummul_nums_norm /whirlpool_ashigaru_2_5M/whirlpool_ashigaru_2_5M_cummul_nums_norm.png
create_file_with_text ./figures/ashigaru/s2p5M/whirlpool_ashigaru_2_5M_cummul_nums_notnorm /whirlpool_ashigaru_2_5M/whirlpool_ashigaru_2_5M_cummul_nums_notnorm.png
create_file_with_text ./figures/ashigaru/s2p5M/whirlpool_ashigaru_2_5M_cummul_values_norm /whirlpool_ashigaru_2_5M/whirlpool_ashigaru_2_5M_cummul_values_norm.png
create_file_with_text ./figures/ashigaru/s2p5M/whirlpool_ashigaru_2_5M_cummul_values_notnorm /whirlpool_ashigaru_2_5M/whirlpool_ashigaru_2_5M_cummul_values_notnorm.png

create_file_with_text ./figures/ashigaru/s25M/whirlpool_ashigaru_25M_cummul_nums_norm /whirlpool_ashigaru_25M/whirlpool_ashigaru_25M_cummul_nums_norm.png
create_file_with_text ./figures/ashigaru/s25M/whirlpool_ashigaru_25M_cummul_nums_notnorm /whirlpool_ashigaru_25M/whirlpool_ashigaru_25M_cummul_nums_notnorm.png
create_file_with_text ./figures/ashigaru/s25M/whirlpool_ashigaru_25M_cummul_values_norm /whirlpool_ashigaru_25M/whirlpool_ashigaru_25M_cummul_values_norm.png
create_file_with_text ./figures/ashigaru/s25M/whirlpool_ashigaru_25M_cummul_values_notnorm /whirlpool_ashigaru_25M/whirlpool_ashigaru_25M_cummul_values_notnorm.png


cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_ashigaru_2_5M/ $BASE_DIR/figures/ashigaru/s2p5M/ "Ashigaru_Whirlpool_2.5M_sats"
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_ashigaru_25M/ $BASE_DIR/figures/ashigaru/s25M/ "Ashigaru_Whirlpool_25M_sats"
cd $BASE_DIR

# wasabi 1
create_file_with_text ./figures/wasabi1/wasabi1_zksnacks_cummul_nums_norm wasabi1/wasabi1_cummul_nums_norm.png
create_file_with_text ./figures/wasabi1/wasabi1_zksnacks_cummul_nums_notnorm wasabi1/wasabi1_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi1/wasabi1_zksnacks_cummul_values_norm wasabi1/wasabi1_cummul_values_norm.png
create_file_with_text ./figures/wasabi1/wasabi1_zksnacks_cummul_values_notnorm wasabi1/wasabi1_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi1_zksnacks/ $BASE_DIR/figures/wasabi1/ "Wasabi_1_-_zkSNACKs" 
cd $BASE_DIR

# samourai whirlpool

mkdir ./figures/whirlpool/all
mkdir ./figures/whirlpool/s100k
mkdir ./figures/whirlpool/s1M
mkdir ./figures/whirlpool/s5M
mkdir ./figures/whirlpool/s50M

#all
create_file_with_text ./figures/whirlpool/all/whirlpool_cummul_nums_norm whirlpool/whirlpool_cummul_nums_norm.png
create_file_with_text ./figures/whirlpool/all/whirlpool_cummul_nums_notnorm whirlpool/whirlpool_cummul_nums_notnorm.png
create_file_with_text ./figures/whirlpool/all/whirlpool_cummul_values_norm whirlpool/whirlpool_cummul_values_norm.png
create_file_with_text ./figures/whirlpool/all/whirlpool_cummul_values_notnorm /whirlpool/whirlpool_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool/ $BASE_DIR/figures/whirlpool/all/ "Samourai_Whirlpool_(All_pools)" 
cd $BASE_DIR

#100k
create_file_with_text ./figures/whirlpool/s100k/whirlpool_100k_cummul_nums_norm whirlpool_100k/whirlpool_100k_cummul_nums_norm.png
create_file_with_text ./figures/whirlpool/s100k/whirlpool_100k_cummul_nums_notnorm.png whirlpool_100k/whirlpool_100k_cummul_nums_notnorm.png
create_file_with_text ./figures/whirlpool/s100k/whirlpool_100k_cummul_values_norm.png whirlpool_100k/whirlpool_100k_cummul_values_norm.png
create_file_with_text ./figures/whirlpool/s100k/whirlpool_100k_cummul_values_notnorm.png whirlpool_100k/whirlpool_100k_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_100k/ $BASE_DIR/figures/whirlpool/s100k/ "Samourai_Whirlpool_(All_pools)" 
cd $BASE_DIR

#1M
create_file_with_text ./figures/whirlpool/s1M/whirlpool_1M_cummul_nums_norm whirlpool_1M/whirlpool_1M_cummul_nums_norm.png
create_file_with_text ./figures/whirlpool/s1M/whirlpool_1M_cummul_nums_notnorm.png whirlpool_1M/whirlpool_1M_cummul_nums_notnorm.png
create_file_with_text ./figures/whirlpool/s1M/whirlpool_1M_cummul_values_norm.png whirlpool_1M/whirlpool_1M_cummul_values_norm.png
create_file_with_text ./figures/whirlpool/s1M/whirlpool_1M_cummul_values_notnorm.png whirlpool_1M/whirlpool_1M_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_1M/ $BASE_DIR/figures/whirlpool/s1M/ "Samourai_Whirlpool_(All_pools)" 
cd $BASE_DIR

#5M
create_file_with_text ./figures/whirlpool/s5M/whirlpool_5M_cummul_nums_norm whirlpool_5M/whirlpool_5M_cummul_nums_norm.png
create_file_with_text ./figures/whirlpool/s5M/whirlpool_5M_cummul_nums_notnorm.png whirlpool_5M/whirlpool_5M_cummul_nums_notnorm.png
create_file_with_text ./figures/whirlpool/s5M/whirlpool_5M_cummul_values_norm.png whirlpool_5M/whirlpool_5M_cummul_values_norm.png
create_file_with_text ./figures/whirlpool/s5M/whirlpool_5M_cummul_values_notnorm.png whirlpool_5M/whirlpool_5M_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_5M/ $BASE_DIR/figures/whirlpool/s5M/ "Samourai_Whirlpool_(All_pools)" 
cd $BASE_DIR

#50K
create_file_with_text ./figures/whirlpool/s50M/whirlpool_50M_cummul_nums_norm whirlpool_50M/whirlpool_50M_cummul_nums_norm.png
create_file_with_text ./figures/whirlpool/s50M/whirlpool_50M_cummul_nums_notnorm.png whirlpool_50M/whirlpool_50M_cummul_nums_notnorm.png
create_file_with_text ./figures/whirlpool/s50M/whirlpool_50M_cummul_values_norm.png whirlpool_50M/whirlpool_50M_cummul_values_norm.png
create_file_with_text ./figures/whirlpool/s50M/whirlpool_50M_cummul_values_notnorm.png whirlpool_50M/whirlpool_50M_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./whirlpool_50M/ $BASE_DIR/figures/whirlpool/s50M/ "Samourai_Whirlpool_(All_pools)" 
cd $BASE_DIR


# joinmarket

create_file_with_text ./figures/joinmarket/joinmarket_all_zksnacks_cummul_nums_norm joinmarket_all/joinmarket_all_cummul_nums_norm.png
create_file_with_text ./figures/joinmarket/joinmarket_all_zksnacks_cummul_nums_notnorm joinmarket_all/joinmarket_all_cummul_nums_notnorm.png
create_file_with_text ./figures/joinmarket/joinmarket_all_zksnacks_cummul_values_norm joinmarket_all/joinmarket_all_cummul_values_norm.png
create_file_with_text ./figures/joinmarket/joinmarket_all_zksnacks_cummul_values_notnorm joinmarket_all/joinmarket_all_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./joinmarket_all/ $BASE_DIR/figures/joinmarket/ "JoinMarket" 
cd $BASE_DIR

# wasabi 2
mkdir ./figures/wasabi2/all
mkdir ./figures/wasabi2/btip
mkdir ./figures/wasabi2/coinjoinnl
mkdir ./figures/wasabi2/dragonordnance
mkdir ./figures/wasabi2/gingerwallet
mkdir ./figures/wasabi2/kruw
mkdir ./figures/wasabi2/mega
mkdir ./figures/wasabi2/opencoordinator
mkdir ./figures/wasabi2/unknown
mkdir ./figures/wasabi2/wasabicoordinator
mkdir ./figures/wasabi2/wasabist
mkdir ./figures/wasabi2/zksnacks


#all
create_file_with_text ./figures/wasabi2/all/wasabi2_cummul_nums_norm wasabi2/wasabi2_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/all/wasabi2_cummul_nums_notnorm wasabi2/wasabi2_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/all/wasabi2_cummul_values_norm wasabi2/wasabi2_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/all/wasabi2_cummul_values_notnorm wasabi2/wasabi2_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2/ $BASE_DIR/figures/wasabi2/all/ "Wasabi_2_(All_coordinators)" 
cd $BASE_DIR


#btip
create_file_with_text ./figures/wasabi2/btip/wasabi2_cummul_nums_norm wasabi2_btip/wasabi2_btip_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/btip/wasabi2_cummul_nums_notnorm wasabi2_btip/wasabi2_btip_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/btip/wasabi2_cummul_values_norm wasabi2_btip/wasabi2_btip_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/btip/wasabi2_cummul_values_notnorm wasabi2_btip/wasabi2_btip_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_btip/ $BASE_DIR/figures/wasabi2/btip/ "Wasabi_2_-_btip.nl" 
cd $BASE_DIR

#coinjoinnl
create_file_with_text ./figures/wasabi2/coinjoinnl/wasabi2_cummul_nums_norm wasabi2_coinjoin_nl/wasabi2_coinjoin_nl_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/coinjoinnl/wasabi2_cummul_nums_notnorm wasabi2_coinjoin_nl/wasabi2_coinjoin_nl_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/coinjoinnl/wasabi2_cummul_values_norm wasabi2_coinjoin_nl/wasabi2_coinjoin_nl_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/coinjoinnl/wasabi2_cummul_values_notnorm wasabi2_coinjoin_nl/wasabi2_coinjoin_nl_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_coinjoin_nl/ $BASE_DIR/figures/wasabi2/coinjoinnl/ "Wasabi_2_-_coinjoin_nl" 
cd $BASE_DIR

#dragonordnance
create_file_with_text ./figures/wasabi2/dragonordnance/wasabi2_cummul_nums_norm wasabi2_dragonordnance/wasabi2_dragonordnance_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/dragonordnance/wasabi2_cummul_nums_notnorm wasabi2_dragonordnance/wasabi2_dragonordnance_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/dragonordnance/wasabi2_cummul_values_norm wasabi2_dragonordnance/wasabi2_dragonordnance_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/dragonordnance/wasabi2_cummul_values_notnorm wasabi2_dragonordnance/wasabi2_dragonordnance_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_dragonordnance/ $BASE_DIR/figures/wasabi2/dragonordnance/ "Wasabi_2_-_dragonordnance.com" 
cd $BASE_DIR

#gingerwallet
create_file_with_text ./figures/wasabi2/gingerwallet/wasabi2_cummul_nums_norm wasabi2_gingerwallet/wasabi2_gingerwallet_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/gingerwallet/wasabi2_cummul_nums_notnorm wasabi2_gingerwallet/wasabi2_gingerwallet_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/gingerwallet/wasabi2_cummul_values_norm wasabi2_gingerwallet/wasabi2_gingerwallet_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/gingerwallet/wasabi2_cummul_values_notnorm wasabi2_gingerwallet/wasabi2_gingerwallet_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_gingerwallet/ $BASE_DIR/figures/wasabi2/gingerwallet/ "Wasabi_2_-_gingerwallet.io" 
cd $BASE_DIR

#kruw
create_file_with_text ./figures/wasabi2/kruw/wasabi2_cummul_nums_norm wasabi2_kruw/wasabi2_kruw_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/kruw/wasabi2_cummul_nums_notnorm wasabi2_kruw/wasabi2_kruw_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/kruw/wasabi2_cummul_values_norm wasabi2_kruw/wasabi2_kruw_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/kruw/wasabi2_cummul_values_notnorm wasabi2_kruw/wasabi2_kruw_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_kruw/ $BASE_DIR/figures/wasabi2/kruw/ "Wasabi_2_-_kruw.io" 
cd $BASE_DIR

#mega
create_file_with_text ./figures/wasabi2/mega/wasabi2_cummul_nums_norm wasabi2_mega/wasabi2_mega_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/mega/wasabi2_cummul_nums_notnorm wasabi2_mega/wasabi2_mega_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/mega/wasabi2_cummul_values_norm wasabi2_mega/wasabi2_mega_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/mega/wasabi2_cummul_values_notnorm wasabi2_mega/wasabi2_mega_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_mega/ $BASE_DIR/figures/wasabi2/mega/ "Wasabi_2_-_mega.cash" 
cd $BASE_DIR


#opencoordinator
create_file_with_text ./figures/wasabi2/opencoordinator/wasabi2_cummul_nums_norm wasabi2_opencoordinator/wasabi2_opencoordinator_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/opencoordinator/wasabi2_cummul_nums_notnorm wasabi2_opencoordinator/wasabi2_opencoordinator_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/opencoordinator/wasabi2_cummul_values_norm wasabi2_opencoordinator/wasabi2_opencoordinator_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/opencoordinator/wasabi2_cummul_values_notnorm wasabi2_opencoordinator/wasabi2_opencoordinator_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_opencoordinator/ $BASE_DIR/figures/wasabi2/opencoordinator/ "Wasabi_2_-_opencoordinator.io" 
cd $BASE_DIR


#unknown
create_file_with_text ./figures/wasabi2/unknown/wasabi2_cummul_nums_norm wasabi2_unknown_2024/wasabi2_unknown_2024_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/unknown/wasabi2_cummul_nums_notnorm wasabi2_unknown_2024/wasabi2_unknown_2024_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/unknown/wasabi2_cummul_values_norm wasabi2_unknown_2024/wasabi2_unknown_2024_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/unknown/wasabi2_cummul_values_notnorm wasabi2_unknown_2024/wasabi2_unknown_2024_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_unknown_2024/ $BASE_DIR/figures/wasabi2/unknown/ "Wasabi_2_-_Unknown" 
cd $BASE_DIR


#wasabicoordinator
create_file_with_text ./figures/wasabi2/wasabicoordinator/wasabi2_cummul_nums_norm wasabi2_wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/wasabicoordinator/wasabi2_cummul_nums_notnorm wasabi2_wasabicoordinator/wasabi2_wasabicoordinator_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/wasabicoordinator/wasabi2_cummul_values_norm wasabi2_wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/wasabicoordinator/wasabi2_cummul_values_notnorm wasabi2_wasabicoordinator/wasabi2_wasabicoordinator_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_wasabicoordinator/ $BASE_DIR/figures/wasabi2/wasabicoordinator/ "Wasabi_2_-_wasabicoordinator.io" 
cd $BASE_DIR


#wasabist
create_file_with_text ./figures/wasabi2/wasabist/wasabi2_cummul_nums_norm wasabi2_wasabist/wasabi2_wasabist_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/wasabist/wasabi2_cummul_nums_notnorm wasabi2_wasabist/wasabi2_wasabist_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/wasabist/wasabi2_cummul_values_norm wasabi2_wasabist/wasabi2_wasabist_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/wasabist/wasabi2_cummul_values_notnorm wasabi2_wasabist/wasabi2_wasabist_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_wasabist/ $BASE_DIR/figures/wasabi2/wasabist/ "Wasabi_2_-_wasabist.io" 
cd $BASE_DIR


#zksnacks
create_file_with_text ./figures/wasabi2/zksnacks/wasabi2_cummul_nums_norm wasabi2_zksnacks/wasabi2_zksnacks_cummul_nums_norm.png
create_file_with_text ./figures/wasabi2/zksnacks/wasabi2_cummul_nums_notnorm wasabi2_zksnacks/wasabi2_zksnacks_cummul_nums_notnorm.png
create_file_with_text ./figures/wasabi2/zksnacks/wasabi2_cummul_values_norm wasabi2_zksnacks/wasabi2_zksnacks_cummul_values_norm.png
create_file_with_text ./figures/wasabi2/zksnacks/wasabi2_cummul_values_notnorm wasabi2_zksnacks/wasabi2_zksnacks_cummul_values_notnorm.png

cd $DATA_SOURCE
python $BASE_DIR/python_scripts/copy_months.py ./wasabi2_zksnacks/ $BASE_DIR/figures/wasabi2/zksnacks/ "Wasabi_2_-_zkSNACKs" 
cd $BASE_DIR


# build
echo "running build..."
python ./python_scripts/build.py
echo "$1 build done"
