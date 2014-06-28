#!/bin/bash

set -e

# http://www.raymondcamden.com/index.cfm/2013/11/5/Ripple-is-Reborn

npm install -g phonegap 
npm install -g cordova
npm install -g ripple-emulator 
# use cordova.js instead of phonegap.js
#add to $PATH platform-tools tools

cd ardajo/
ember init 
cd -

#cp ardajo/dist/index.html telefona/www/

phonegap create telefona

cd telefona/

cordova platform add android
phonegap local build android

#EOF
