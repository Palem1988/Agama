#!/bin/bash
./binary_artifacts.sh
npm install electron-packager -g || sudo npm install electron-packager -g
npm install electron -g --unsafe-perm=true
npm install && npm install webpack webpack-dashboard
cd gui
rm -rf EasyDEX-GUI
git clone -b dev --single-branch https://github.com/VerusCoin/EasyDEX-GUI.git
cd EasyDEX-GUI/react
npm install
npm run build
cd src
npm start
