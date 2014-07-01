#!/bin/bash

# build ember app and add it to phonegap app

set -e

cd ardajo/
ember build
cd -

cp -vR ardajo/dist/assets/ telefona/assets/www/
cp -vR ardajo/dist/img/* telefona/assets/www/img/

exit
#EOF
