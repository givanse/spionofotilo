#!/bin/bash

set -e

# D" indicates Debug level or above) and the "*:S" indicates to filter out all others
adb logcat CordovaLog:D *:S

exit
#EOF
