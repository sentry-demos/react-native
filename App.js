/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View, TextInput, ImageBackground, Image} from 'react-native';

import { Sentry, SentrySeverity, SentryLog } from 'react-native-sentry';
Sentry.config('<your_dsn_key>', {
  logLevel: SentryLog.Debug,
  deactivateStacktraceMerging: false
}).install();
//TEST


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={require('./assets/sentry-pattern.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image source={require('./assets/sentry-glyph-black.png')} style={{ height: 70, width: 70}}></Image>
          <Text style={styles.welcome}>Sample React-Native app</Text>
          <TextInput
            style={styles.emailTextInput}
            onChangeText={(email) => Sentry.setUserContext({email})}
            accessibilityLabel={'email'}
            textContentType='emailAddress'
            placeholder='Enter email address'
            placeholderTextColor="#808080"
            textAlign='center'
          />
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => { var a = undefinedVariable; }}
            accessibilityLabel={'ReferenceError: undefinedVariable is not defined'}
            title="ReferenceError: undefinedVariable is not defined"
          />
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => { var obj = {}; obj.invalidFunction(); }}
            accessibilityLabel={'TypeError: obj.invalidFunction is not a function'}
            title="TypeError: obj.invalidFunction is not a function"
          />
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => { Sentry.nativeCrash(); }}
            accessibilityLabel={'native crash'}
            title="native crash!"
          />
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => { Sentry.captureMessage('TEST message', { level: SentrySeverity.Warning }); }}
            accessibilityLabel={'send message'}
            title="send message"
          />
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => { Sentry.setTagsContext({customerType: 'enterprise', environment: 'production', react: true}) }}
            accessibilityLabel={'set sample tags'}
            title="set sample tags"
          />
        </View>
      </ImageBackground>
    );

    // 'INIT' APP
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //     <Button
    //         style={styles.button}
    //         styleDisabled={{ color: 'red' }}
    //         onPress={() => { var obj = {}; obj.invalidFunction(); }}
    //         accessibilityLabel={'TypeError: obj.invalidFunction is not a function'}
    //         title="TypeError: obj.invalidFunction is not a function"
    //       />
    //   </View>
    // );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    fontSize: 12,
    color: 'green'
  },
  emailTextInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  }
});


// 'INIT' APP
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
