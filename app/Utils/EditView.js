import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

 

export default class EditView extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <View style={LoginStyles.TextInputView}>
                <TextInput style={LoginStyles.TextInput}
                    {...this.props}   
                    returnKeyType='next'
                />
            </View>
        );
    }
}


const LoginStyles = StyleSheet.create({
    TextInputView: {
        marginTop: 10,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    TextInput: {
        height: 45,
        margin: 18,
        fontSize: 17,
    },
});