import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from "react";

import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';

export default class App extends Component {

    render() {
        return (
            <NavigationContainer> 
                <Stack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Home Screen' }}
                    />
                    <Stack.Screen
                        name="Chat"
                        component={ChatScreen}
                        options={{ title: 'Chat Screen' }}
                    />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

const Stack = createStackNavigator();
