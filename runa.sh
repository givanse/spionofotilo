#!/bin/bash

set -e

./build.sh

cd telefona/
./cordova/run

exit
#EOF
