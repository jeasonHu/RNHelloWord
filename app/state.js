import React, {
  Component
} from 'react';
import {  
  StyleSheet,
  Text,
  View,
}
  from 'react-native';


export default class Greeting extends Component {
  constructor(props) {
    super(props);
    //初始化state
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作,state值变化后 对应的操作也会有更新
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }

}
