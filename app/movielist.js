import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet, Text
} from 'react-native';

export default class Movielist extends Component {
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
                <Image style={styles1.img_thumbnail} source={{ uri: 'https://pic.maizuo.com/usr/100003461/cad4fab67c09b7fe193c4767b61d6ba3.jpg' }} />
            </View>
        )
    }
}

const styles1 = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img_thumbnail: {
        marginBottom: 5,
        width: 201,
        height: 106,
    },

});