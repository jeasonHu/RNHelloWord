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
import {
    toastShort
} from './../../Utils/ToastUtil'
import Loading from './../../Utils/Loading/Loading'

import Login from './Login'


export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ''
        }
    }


    pressButton(type) {
        switch (type) {
            case 'Login':
                let _this = this;
                const {
                    navigator
                } = this.props;
                if (navigator) {
                    navigator.push({
                        component: Login,
                        params: {
                            from: 'UserInfo',
                            setUser: function(user) {
                                _this.setState({
                                    user: user
                                })
                            }
                        }
                    });
                } else {
                    toastShort('navigator is null');
                }
                break;
            default:
                toastShort('default');
                break;
        }
    }



    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/*{this.props.from}*/}
                    {
                        this.state.user
                            ? <Text>UserName:  {this.state.user}</Text>
                            : <Text>  No Login  </Text>
                    }

                    <View style={{ marginTop: 20 }}>
                        <Icon.Button name="user-o" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login')} >
                            <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>    Login    </Text>
                        </Icon.Button>
                    </View>
                </View>

                <Loading ref={'loading'} />
            </View>

        );
    }

}