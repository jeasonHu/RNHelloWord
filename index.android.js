/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Platform,
  BackAndroid,
}
  from 'react-native';


import Indexroot from './app/index';

export default class RNHelloWord extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
     // BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  render() {
    return (
      <Indexroot />
    );
  }
}

AppRegistry.registerComponent('RNHelloWord', () => RNHelloWord);