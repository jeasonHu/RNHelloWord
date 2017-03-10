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
  Image,
  StyleSheet,
  Text,
  View
}
  from 'react-native';

 
 
import Indexroot from './app/index';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class RNHelloWord extends Component {
  render() {
 
    return (

      <View style={styles.container}>
        <Greeting name = 'ABC'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },

  img_thumbnail: {
    marginBottom: 5,
    width: 201,
    height: 106,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('RNHelloWord', () => RNHelloWord);