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
    Platform,
}
    from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import { toastShort } from './../../Utils/ToastUtil'

export default class UserInfo extends Component {



    pressButton(type) {
        switch (type) {
            case 'Login':

                toastShort(type); 
                break;
            case 'Animation':


                break;
            default:
                toastShort('default');
                break;
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>MainPage from {this.props.from}</Text>





                <Icon.Button name="cloud" backgroundColor="#3b5998" onPress={() => this.pressButton('Login')}>
                    {/*<Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login1')}>*/}
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>Login with Test</Text>
                </Icon.Button>



                <Text>excute Loading Animation</Text>
                 <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.pressButton('Login1')}>
                    {/*<Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login1')}>*/}
                    <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>Login with Test</Text>
                </Icon.Button>
            </View>

        );
    }

}
