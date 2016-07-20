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
  View,
  ScrollView,
  NavigatorIOS
} from 'react-native';

class App extends Component{
  render(){
    ender: function () {
    return (
      <NavigatorIOS style={{flex:1}} initialRoute={{component:List,title:"邮轮",passProps:{}}}/>
    );
  }
}


class List extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return (
      <ScrollView style={{style.flex}}>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮济州岛3日游</Text>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮台湾3日游</Text>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮地中海8日游</Text>
      </ScrollView>
    )
  }
  goTo(){
    this.props.navigator.push({
      component:Detail,
      title:"邮轮详情",
      rightButtonTitle:"购物车",
      onRightButtonPress : function () {
        alert("进入我的购物车");
      }
    })
  }
}

class Detail extends Component{
  render(){
     return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});


AppRegistry.registerComponent('App', () => App);
