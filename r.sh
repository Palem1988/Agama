#!/bin/bash
./binary_artifacts.sh
sudo yarn add electron-packager -g
sudo yarn add electron -g --unsafe-perm=true
cd gui/EasyDEX-GUI/
yarn install && yarn add webpack webpack-dashboard
cd react
yarn install
yarn run build
cd src
yarn start
