#!/bin/bash

set -e

cp -vuR ardajo/dist/assets/ telefona/www/
cp -vuR ardajo/dist/img/ telefona/www/img/
cp -vuR ardajo/dist/test* telefona/www/

cd telefona
ripple emulate

#EOF
