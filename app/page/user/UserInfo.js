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
import MyAnimation from './../../AnimationTest'
import Loading from './../../Utils/Loading/Loading'



export default class UserInfo extends Component {



    pressButton(type) {
        switch (type) {
            case 'Login':

                toastShort(type);
                break;
            case 'Animation':
                const { navigator } = this.props;
                if (navigator) {
                    navigator.push({
                        component: MyAnimation,
                        params: {
                            from: 'UserInfo'
                        }
                    });
                } else {
                    toastShort('navigator is null');
                }


                break;

            case 'AnimationLoading':
                let isShown = this.getLoading().getisShown();
                //toastShort(isShown);
                if (isShown) {
                    this.getLoading().dismiss();
                } else {
                    this.getLoading().show('Loading...', true);
                }

                break;
            default:
                toastShort('default');
                break;
        }
    }

    back() {
        //console.log('back========================================================');
        toastShort('back');
    }

    getLoading() {
        return this.refs['loading'];
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                {/*<TitleBar textcontent='用户中心' textcolor='#595959' backgroundColor='#ffdc55' leftClick={this.back.bind(this) } />*/}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>MainPage from {this.props.from}</Text>

                    <Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.back.bind(this)} >
                        {/*<Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login1')}>*/}
                        <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>Login with Test</Text>
                    </Icon.Button>



                    <Text>To Loading Animation</Text>
                    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Animation')}>
                        {/*<Icon.Button name="cloud" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'Login1')}>*/}
                        <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>To Animation</Text>
                    </Icon.Button>

                    <Text>excute Loading Animation</Text>
                    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.pressButton.bind(this, 'AnimationLoading')}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 12, color: '#F5FCFF' }}>To Loading</Text>
                    </Icon.Button>
                </View>

                <Loading ref={'loading'} />
            </View>

        );
    }

}
