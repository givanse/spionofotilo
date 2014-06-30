
```
npm install

cd ardajo/
ember init
bower update
ember server

rm -r telefona/
phonegap create telefona/ se.givan.spionofotilo spionofotilo
cd telefona/
phonegap platform update android
git checkout telefona/
phonegap plugin add org.apache.cordova.device
phonegap run android
```
