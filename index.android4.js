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

import Search from './Search'


class App extends Component {
  render() {
    return (
      <View style={[styles.flex,styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  flexDirection:{
    flexDirection:'row'
  },
  topStatus:{
    marginTop:25
  }
});

AppRegistry.registerComponent('App', () => App);
