
```
npm install

cd ardajo/
ember init
bower update
ember server

rm -r telefona/
create telefona/ se.givan.spionofotilo spionofotilo
cd telefona/
git checkout telefona/

# https://crosswalk-project.org/#wiki/Plugins-list-@-3.4.0-supported-by-crosswalk-cordova-android
plugman install --platform android --project . \
    --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git#r0.2.9
./cordova/run
```
