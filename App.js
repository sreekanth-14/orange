/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}
       keyboardShouldPersistTaps='handled'
       >
        <TextInput keyboardType="numeric" style={styles.welcome} underlineColorAndroid='blue'/>
        <TouchableOpacity style={styles.instructions}><Text style={{ color: 'white', alignSelf: 'center'}}>submit</Text></TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    backgroundColor: 'blue',
    marginVertical: 50,
    padding:20,
  },
});
