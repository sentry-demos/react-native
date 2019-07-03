# sentry-demos/react-native

https://docs.sentry.io/clients/react-native/

## Goal/Summary:
Show how Sentry works to surface errors in react-native applications (stacktraces will be symbolicated + unminified)

## First-time Setup
React Native v0.59.10
react-native-sentry ^0.43.2
1. Install dependencies
```
npm install -g react-native-cli
npm install && yarn install
```

2. Configure the SDK with your `PUBLIC_DSN_KEY` in App.js
3. Configure sentry.properties with your organization, project and auth token

```
# for iOS
$ react-native run-ios --configuration Release
```

```
# Release # for Android
$ react-native run-android --variant
```

6. Simulator/Emulator should have launched with sample app. Trigger errors and go to Sentry to see them!

# GIF (JS error)
![Alt Text](react-native-demo.gif)

# Native crash
![Alt Text](native-crash.png)
