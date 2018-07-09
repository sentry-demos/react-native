# sentry-demos/react

## Goal/Summary:
Show how Sentry works
- Import/Integrate
- Configuration

## First-time Setup
1. Install dependencies
```
cd ReactNativeDemo
npm install
yarn install
```

2. Configure Raven with your `PUBLIC_DSN_KEY` in App.js

```
$ react-native run-ios --configuration Release # for iOS
```

```
$ react-native run-android --variant Release # for Android
```

6. Simulator/Emulator should have launched with sample app. Trigger errors and go to Sentry to see them!
