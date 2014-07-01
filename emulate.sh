#!/bin/bash

set -e

ripple=`pwd`'/node_modules/ripple-emulator/bin/ripple'

./build.sh

cd telefona/
./cordova/build
$ripple emulate --path assets/www/

#EOF
