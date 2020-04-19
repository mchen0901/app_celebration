import 'react-native-gesture-handler';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import React, { Component } from "react";

export default class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.array = [{
      title: 'Enter your messages below!'}],
        this.state = { 
            apiResponse: "", 
            movies: [], 
            arrayHolder: [],
            textInput_Holder: ""
        };
    }

    handleMessage = (text) => {
      this.setState({ message: text })
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


joinData = () => {
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

    componentDidMount() {
        this.callAPI();
        this.callMoviesAPI();
        this.setState({ arrayHolder: [...this.array] })
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
               
        {/*     <Text>Data from external API: </Text>
        <FlatList
            data={this.state.movies}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
      */}


 <View style={styles.ChatContainer}>
 <Text style={styles.title}>Chat here</Text>
        <FlatList
 
          data={this.state.arrayHolder}
 
          width='100%'
 
          extraData={this.state.arrayHolder}
 
          keyExtractor={(index) => index.toString()}
 
          ItemSeparatorComponent={this.FlatListItemSeparator}
 
          renderItem={({ item }) => <Text style={styles.item}> {item.title} </Text>}
        />

        <TextInput
          placeholder="Enter Message Here!"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.buttonText}> Send </Text>
 
        </TouchableOpacity>
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

      ChatContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5, 
    borderColor: '#000000', 
    borderWidth: 2
 
  },

      item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
  textInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
 
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

    title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
