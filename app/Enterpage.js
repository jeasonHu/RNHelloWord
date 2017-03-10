import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import MainPage from './Main'


let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');


export default class EnterPage extends Component {
    componentDidMount() {
        this.timer = setTimeout(
            () => {
                const { navigator } = this.props;
                if (navigator) {
                    //  navigator.push({
                    navigator.replace({
                        component: MainPage,
                        params: {
                            from: 'EnterPage'
                        }
                    }); 
                }
            },
            2000
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <Image style={styles.bg_img} source={require('./img/bg_enter.jpg')} > 
                <Image style={styles.txt_img} source={require('./img/enter_text.png')} />

            </Image>
        )
    }
}

const styles = StyleSheet.create({ 
    bg_img: {
        flex: 1,
        width: null,
        height: null, 
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    txt_img: {
        width: 179,
        height: 90, 
        margin: 50,
    },
});