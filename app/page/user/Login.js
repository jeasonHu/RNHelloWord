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
import {
    toastShort
} from './../../Utils/ToastUtil'
import TitleBar from './../../Utils/TitleBar';
import EditView from './../../Utils/EditView';
import Loading from './../../Utils/Loading/Loading'


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    }



    back() {
        const {
            navigator
        } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    Loading() {
        let isShown = this.refs['loading'].getisShown();
        if (isShown) {
            this.refs['loading'].dismiss();
        } else {
            this.refs['loading'].showOutTitleBar('Loading...', true);
        }
    }


    Login() {
        console.log('Login--============================');
        if (this.userName) {
            if (this.password) {
                this.Loading();
                this.timer = setTimeout(() => {
                    if (this.props.setUser) {
                        this.props.setUser(this.userName);
                    }
                    this.back();
                    this.Loading();
                }, 2000);
            } else {
                toastShort('请输入密码');
            }
        } else {
            toastShort('请输入账号');
        }


    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar
                    backgroundColor='#feca00'
                    barStyle='light-content'
                    animated={true}
                    hidden={false}
                />
                <TitleBar textcontent='登录' textcolor='#595959' backgroundColor='#ffdc55' leftClick={this.back.bind(this)} />

                <View style={{ flex: 1, padding: 30, }}>

                    <View style={{ marginTop: 60 }}>

                        <EditView placeholder='输入用户名/注册手机号' onChangeText={(text) => {
                            this.userName = text;
                        }} />
                        <EditView placeholder='输入密码' secureTextEntry={true} onChangeText={(text) => {
                            this.password = text;
                        }} />
                    </View>

                    <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', }} >
                        <Icon.Button name="user-o"
                            backgroundColor="#3b5998"
                            style={{ width: 80 }}
                            onPress={this.Login.bind(this)}>

                            <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}> 登录 </Text>
                        </Icon.Button>
                    </View>

                </View>

                <Loading ref={'loading'} />
            </View>

        );
    }

}