#!/bin/bash

set -e

#W/ChromiumCameraInfo(29558): Missing android.permission.CAMERA permission, no system camera available.
adb logcat *:S chromium ChromiumCameraInfo 

exit
#EOF
