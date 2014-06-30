#!/bin/bash

set -e

./build.sh

cd telefona/

phonegap run android

exit
#EOF
