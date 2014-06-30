#!/bin/bash

set -e

./build.sh

cd telefona/

ripple emulate

#EOF
