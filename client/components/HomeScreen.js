import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import React, { Component } from "react";

export default class HomeScreen extends Component {

    render() {

        console.log('Hello Console Log');

        return (
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
