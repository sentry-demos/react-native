/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {Sentry, SentrySeverity, SentryLog} from 'react-native-sentry';

const sentryDsn = Platform.select({
  android:
    'https://425ec64f4e9e46c9a5a05ecb0d7b8750:93493654ed784a35ba2519f5b76fe154@sentry.io/1226692',
  ios:
    'https://425ec64f4e9e46c9a5a05ecb0d7b8750:93493654ed784a35ba2519f5b76fe154@sentry.io/1226692'
});
Sentry.config(sentryDsn, {
  logLevel: SentryLog.Debug,
  deactivateStacktraceMerging: false
}).install();

Sentry.setExtraContext({
  a_thing: 3,
  some_things: {green: 'red'},
  foobar: ['a', 'b', 'c'],
  react: true,
  float: 2.43
});

Sentry.setTagsContext({
  environment: 'production',
  react: true
});

Sentry.setUserContext({
  email: 'john@apple.com',
  userID: '12341',
  username: 'username',
  extra: {
    is_admin: false
  }
});

Sentry.captureBreadcrumb({
  message: 'Item added to shopping cart',
  category: 'action',
  data: {
    isbn: '978-1617290541',
    cartSize: '3'
  }
});

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {text: ''};
    Sentry.setEventSentSuccessfully(event => {
      this.setState({text: JSON.stringify(event)});
    });
  }

  _sendMessage() {
    Sentry.captureMessage('TEST message', {
      level: SentrySeverity.Warning
    });
  }
  _notAFunctionError() {
    var obj = {};
    obj.invalidFunction();
  }
  _uriError() {
    decodeURIComponent('%');
  }

  _typeError() {
    null.f();
  }

  _syntaxError() {
    eval('foo bar');
  }

  _referenceError() {
    var a = undefinedVariable;
  }

  _rangeError() {
    throw new RangeError('Parameter must be between 1 and 100');
  }

  _evalError() {
    setTimeout(() => {
      throw new EvalError('Hello', 'someFile.js', 10);
    }, 1000);
  }

  _throwError() {
    throw new Error('Sentry: Test throw error');
  }
  _rejectPromise() {
    Promise.reject('Boom promise');
  }

  _nativeCrash() {
    Sentry.nativeCrash();
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '80%' }}
          accessibilityLabel={'email'}
        />
        <Button
          style={{fontSize: 12, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._notAFunctionError()}
          accessibilityLabel={'TypeError: obj.invalidFunction is not a function'}
          title="TypeError: obj.invalidFunction is not a function"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._uriError()}
          accessibilityLabel={'URIError: URI malformed'}
          title="URIError: URI malformed"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._typeError()}
          accessibilityLabel={"Uncaught TypeError: Cannot read property 'f' of null"}
          title = "Uncaught TypeError: Cannot read property 'f' of null"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._uriError()}
          accessibilityLabel={'SyntaxError: Unexepected identifier'}
          title="SyntaxError: Unexepected identifier"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._referenceError()}
          accessibilityLabel={'ReferenceError: undefinedVariable is not defined'}
          title="ReferenceError: undefinedVariable is not defined"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._rangeError()}
          accessibilityLabel={'RangeError: Parameter must be between 1 and 100'}
          title="RangeError: Parameter must be between 1 and 100"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._evalError()}
          accessibilityLabel={'EvalError: Hello'}
          title="EvalError: Hello"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._rejectPromise()}
          accessibilityLabel={'reject promise'}
          title="reject promise"
        />
        <Button
          style={{ fontSize: 12, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._nativeCrash()}
          accessibilityLabel={'native crash'}
          title="native crash!"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
          accessibilityLabel={'status'}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
