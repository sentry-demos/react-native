# sentry-demos/react-native

https://docs.sentry.io/clients/react-native/

## Goal/Summary:
Show how Sentry works to surface errors in react-native applications (stacktraces will be symbolicated + unminified)

## First-time Setup
this project uses:  
React Native v0.59.10  
react-native-sentry ^0.43.2  
react-native-cli: 2.0.1  
1. cd ReactNativeDemo
2. Install dependencies
```
npm install -g react-native-cli
npm install && yarn install
```
3. Configure the SDK with your `PUBLIC_DSN_KEY` in App.js
4. Configure sentry.properties with your organization, project and auth token

```
# for iOS
$ react-native run-ios --configuration Release
```

```
# Release # for Android
$ react-native run-android --variant
```

5. Simulator/Emulator should have launched with sample app. Trigger errors and go to Sentry to see them!

# GIF (JS error)
![Alt Text](react-native-demo.gif)

# Native crash
![Alt Text](native-crash.png)
