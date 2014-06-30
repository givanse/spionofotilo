#!/bin/bash

set -e

ripple=`pwd`'/node_modules/ripple-emulator/bin/ripple'

./build.sh

cd telefona/
phonegap build android
$ripple emulate

#EOF
