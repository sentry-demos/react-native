# sentry-demos/react-native

https://docs.sentry.io/clients/react-native/

## Goal/Summary:
Show how Sentry works to surface errors in react-native applications (stacktraces will be symbolicated + unminified)

## FYI - How this React-Native app was initialized and checked-in to git
from ./react-native project root...  
1. `react-native init ReactNativeDemo --version 0.59.10` TODO 0.6.X beta is the rewrite
2. `cd ReactNativeDemo`
3. `npm install react-native-sentry@0.43.2 --save`
4. `mkdir assets`
5. `cp oldReactNativeDemo/assets/* ReactNativeDemo/assets`
6. updated App.js with JSX for our demo app, removed the starter app JSX. added styles variable.
7. removed Sentry.init or Sentry.config from App.js, so `link` command can do it for us
8. did not make a ios/sentry.properties file

## Setup
1. create a React-Native project on Sentry.io
2. node  
```
nvm current
v10.15.3
```
3. from project root:
```
cd ReactNativeDemo
npm install -g react-native-cli@2.0.1
npm install
react-native link sentry-react-native
```
The above link command essentially implements the sentry-cocoa and sentry-java SDK's into the /ios and /android directories. It should modify the following files:

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




