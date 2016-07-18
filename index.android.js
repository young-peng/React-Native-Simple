/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('App', () => App);
