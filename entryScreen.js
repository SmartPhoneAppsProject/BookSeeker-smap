import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Image, Button } from 'react-native';

export default class EntryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
        };
    }

    render() {
      const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                />
                <Text>Title</Text>
                <TextInput
                    onChangeText={(text) => this.setState({ title })}
                    value={this.state.text}
                />
                <Text>Tag</Text>
                <TextInput
                    onChangeText={(text) => this.setState({ title })}
                    value={this.state.text}
                />
                <Button
                onPress={() => navigate('Camera')}
                title='Camera'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 30,
        height: 30,
    },
    title: {
        flex: 1,
    },
    tags: {
        flex: 1,
    },
});