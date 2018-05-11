#!/bin/bash
cd gui/EasyDEX-GUI/
yarn install && yarn add webpack webpack-dashboard
cd react
yarn install
yarn run build
cd src
yarn start
