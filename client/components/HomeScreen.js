import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from "react";


export default class HomeScreen extends Component {

    render() {

        console.log('Hello Console Log');

        return (
            <NavigationContainer> 
                <Stack.Navigator>
                    <View style={styles.container}>
                        
                        <Text>Welcome to React Native Hackathon</Text>
                        <Text>API Integration</Text>
                        <ThemeProvider theme={theme}>
                            <Button 
                                title='Go to Chat'
                                onPress={() => this.props.navigation.navigate('Chat')}
                            />
                        </ThemeProvider>
                    </View>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

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
