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

import Header from './Header';
import List from './List';
import ImportantNews from './ImportantNews'

class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
        <List title="火箭军今起换发新军服 衬衣为国际经典色"></List>
        <List title="身份证现可异地办理 微信发红包需经认证"></List>
        <List title="传军队师职干部工资将达3万 国防部澄清"></List>
        <List title="她是吴秀波前妻 疑与马天宇公布恋情？"></List>
        <ImportantNews news={[
          '王儒林不再任山西省委书记:愉快服从组织安排',
          '外媒:8名在中国丹东工作朝鲜女员工集体出逃',
          '连云港电大女生被辱"续:施暴者曾遭校园暴力',
          '北京检察院依法告知和公布雷洋尸检鉴定意见'
          ]}></ImportantNews>
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
