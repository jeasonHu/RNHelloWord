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


import Indexroot from './index'; 
import App from './App'; 
import UserInfo from './app/page/user/UserInfo';

export default class RNHelloWord extends Component {
 

  render() {
    return (
      <UserInfo />
    );
  }
}

AppRegistry.registerComponent('RNHelloWord', () => RNHelloWord);