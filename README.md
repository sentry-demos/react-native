# sentry-demos/react-native

https://docs.sentry.io/clients/react-native/

## Goal/Summary:
Show how Sentry works to surface errors in react-native applications (stacktraces will be symbolicated + unminified)

## FYI - How React-Native was Initialized
from ./react-native project root...  
1. `react-native init ReactNativeDemo --version 0.59.10` TODO 0.6.X beta is the rewrite
2. `cd ReactNativeDemo`
2. `npm install react-native-sentry@0.43.2 --save`

## Setup
```
nvm current
v10.15.3
```
from project root...
1. `react-native init ReactNativeDemo --version 0.59.10`
2.
```
npm install -g react-native-cli@2.0.1
npm install
```
3. `react-native link sentry-react-native`
The above link command should modify the following files. It updates 
```
git diff
    modified:   android/app/build.gradle
    modified:   android/app/src/main/java/com/reactnativedemo/MainApplication.java
    modified:   android/settings.gradle
    modified:   android/sentry.properties
    modified:   ios/ReactNativeDemo.xcodeproj/project.pbxproj
    modified:   ios/ReactNativeDemo/AppDelegate.m
    modified:   ios/sentry.properties
    modified:   package-lock.json
    modified:   yarn.lock
```

## Run
iOS
```
$ react-native run-ios --configuration Release
```
Android
```
$ react-native run-android --variant
```

# GIF (JS error)
![Alt Text](react-native-demo.gif)

# Native crash
![Alt Text](native-crash.png)


/////////////////////////////
this project uses:  
React Native v0.59.10  
react-native-sentry ^0.43.2  
react-native-cli: 2.0.1

