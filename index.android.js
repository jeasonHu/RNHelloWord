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
import App from './App'; 

export default class RNHelloWord extends Component {
  

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RNHelloWord', () => RNHelloWord);