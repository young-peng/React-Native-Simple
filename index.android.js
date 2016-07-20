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

import MyImage from './MyImage'

const imgs = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://vczero.github.io/me/img/xiaoxue.png'
];
class App extends Component {
  render() {
    return (
      <View style={[styles.flex,{marginTop:40}]}>
        <MyImage imgs={imgs}></MyImage>
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
