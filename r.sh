#!/bin/bash
./binary_artifacts.sh
sudo yarn add electron-packager -g
yarn add electron -g --unsafe-perm=true
yarn install && yarn add webpack webpack-dashboard
cd gui/EasyDEX-GUI/
cd react
yarn install
yarn run build
cd src
yarn start
