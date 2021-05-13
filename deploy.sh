#!/bin/bash

git_pull=`git pull`
node_modules='./node_modules'
yarn_install=`yarn`
dele_folder=`rm -rf $node_modules`

echo "---------Start deploy----------------------------"

echo $git_pull
echo $dele_folder

if [ ! -d "$node_modules" ];then
    echo '1--------------'
    yarn
else
    echo '2--------------'
    echo $dele_folder
    yarn
fi

pm2 restart hook

echo "---------End deploy----------------------------"
