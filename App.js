import React,{Component}  from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'


export default class App extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <HomeScreen/>
      </View>
    );
  } 
  }

