#!/bin/bash

set -e

cd ardajo/
ember build
cd -

cp -vuR ardajo/dist/assets/ telefona/www/
cp -vuR ardajo/dist/img/ telefona/www/img/
cp -vuR ardajo/dist/test* telefona/www/

exit
#EOF
