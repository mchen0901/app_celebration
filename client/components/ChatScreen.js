import 'react-native-gesture-handler';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import React, { Component } from "react";

export default class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "", 
            movies: []
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    callMoviesAPI() {
        fetch("https://reactnative.dev/movies.json")
            .then(res => res.json())
            .then((json) => this.setState({ movies: json.movies }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        this.callMoviesAPI();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Data from API: {this.state.apiResponse}</Text>
                <ThemeProvider theme={theme}>
                    <Button 
                        title='Go back Home'
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </ThemeProvider>
                <View>
                      <Text>Data from external API: </Text>
        <FlatList
            data={this.state.movies}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
      </View>
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
