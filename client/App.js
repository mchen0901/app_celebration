import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from "react";

import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';

export default class App extends Component {

    render() {
        return <AppContainer />;
    }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Chat: {
      screen: ChatScreen
    }
  },{
    initialRouteName: "Home"
  });
  
const AppContainer = createAppContainer(AppNavigator);

const theme = {
    Button: {
      raised: true,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
