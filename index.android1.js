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


var MargginBox = React.createClass({
	render : function (){
		return (
			<View style={[BoxStyles.margginBox]}>
				<Box childName="borderBox" height="height400" width="width400" boxName="margin" classBg="bgred">
					{this.props.children}
				</Box>
			</View>
		)
	}
})

var AwesomeProject = React.createClass({
	render:function () {
		return (
			<MargginBox/>
		)
	}
})

var Box = React.createClass({
	render : function () {
		return (
			<View style={[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>
				<View style={[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
					<Text>Top</Text>
				</View>
				<View style={[BoxStyles[this.props.childName]]}>
					<View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}>
						<Text>left</Text>
					</View>
					{this.props.children}
					<View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}>
					<Text>right</Text></View>
				</View>
				<View style={[BoxStyles.bottom,BoxStyles[this.props.classBg]]}>
					<Text>bottom</Text>
				</View>
				<View style={[BoxStyles.label]}>
					<Text>{this.props.boxName}</Text>
				</View>
			</View>
		)
	}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const BoxStyles = StyleSheet.create({
	height50:{
		height:50
	},
	height400:{
		height:400
	},
	width400:{
		width:400
	},
	bgred:{
		backgroundColor:"#6AC5AC"
	},
	box:{
		flexDirection:"column",
		flex:1,
		position:"relative"
	},
	label:{
		top:0,
		left:0,
		paddingTop:0,
		paddingRight:3,
		paddingBottom:3,
		paddingLeft:0,
		position:"absolute",
		backgroundColor:"#FDC72F"
	},
	top:{
		justifyContent:"center",
		alignItems:"center"
	},
	bottom:{
		justifyContent:"center",
		alignItems:"center"
	},
	right:{
		width:50,
		justifyContent:"space-around",
		alignItems:"center"
	},
	left:{
		width:50,
		justifyContent:"space-around",
		alignItems:"center"
	},
	margginBox:{
		position:"absolute",
		top:100,
		paddingLeft:7,
		paddingRight:7
	}
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
