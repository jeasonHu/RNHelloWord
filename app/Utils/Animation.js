import React, {
    Component
} from 'react';
import {
    View,
    StatusBar,
    Navigator,
    Text,
    Button,
    Animated,
}
    from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import { toastShort } from './ToastUtil'

export default class MyAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {//设置初值
            currentAlpha: 0.0,//标志位，记录当前value
            fadeAnim: new Animated.Value(0.0)
        };
    } 
    startAnimation() {
        this.state.currentAlpha = this.state.currentAlpha == 1.0 ? 0.0 : 1.0;
        Animated.timing(
            this.state.fadeAnim,
            { toValue: this.state.currentAlpha }
        ).start();
    }

    pressButton(type) {
        switch (type) {
            case 'Login':


                break;
            default:
                toastShort('default');
                break;
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Text style={{
                    opacity: this.state.fadeAnim, //透明度动画
                    transform: [//transform动画
                        {
                            translateY: this.state.fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [60, 0] //线性插值，0对应60，0.6对应30，1对应0
                            }),
                        },
                        {
                            scale: this.state.fadeAnim
                        },
                    ],
                }}>
                    <Text>MainPage from {this.props.from}</Text>
                </Animated.Text>




                <Icon.Button name="cloud" backgroundColor="#3b5998" onPress={() => this.startAnimation()}>
                    {/*<Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login1')}>*/}
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>Login with Test</Text>
                </Icon.Button>
            </View>

        );
    }

}
