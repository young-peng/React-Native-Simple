/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');

var {StyleSheet,NavigatorIOS,Text,AppRegistry,View,ScrollView} = React;

var App = React.createClass({
  render: function () {
    return (
      <NavigatorIOS style={{flex:1}} initialRoute={{component:List,title:"邮轮",passProps:{}}}/>
    );
  }
});

var List = React.createClass({
  render:function () {
    return (
      <ScrollView style={{style.flex}}>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮济州岛3日游</Text>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮台湾3日游</Text>
        <Text style={style.list_item} onPress={this.goTo}>☆ 豪华邮轮地中海8日游</Text>
      </ScrollView>
    )
  },
  goTo : function () {
    this.props.navigator.push({
      component:Detail,
      title:"邮轮详情",
      rightButtonTitle:"购物车",
      onRightButtonPress : function () {
        alert("进入我的购物车");
      }
    })
  }
});

var Detail = React.createClass({
  render:function () {
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    )
  }
});

var styles = StyleSheet.create({
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
