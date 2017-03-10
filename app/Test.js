import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class MainPage extends Component {

    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>MainPage from {this.props.from}</Text>
                </TouchableOpacity>
                <Text>https://sanwen8.cn/p/28aALep.html {'\n'}
                    react-native-scrollable-tab-view {'\n'}
                    ref="okButton"</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img_thumbnai: {
        marginBottom: 5,
        width: 201,
        height: 106,
    },

});
