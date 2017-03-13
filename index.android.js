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
}
  from 'react-native';


import Indexroot from './app/index'; 

export default class RNHelloWord extends Component {

  
  render() {
    return (
      <Indexroot />
    );
  }
}

AppRegistry.registerComponent('RNHelloWord', () => RNHelloWord);