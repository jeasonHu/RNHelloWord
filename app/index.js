import React, {
    Component
} from 'react';
import {
    View,
    StatusBar,
    Navigator,
    Platform,
    BackAndroid,
}
    from 'react-native';

import EnterPage from './Enterpage';


export default class indexroot extends Component {

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }


    render() {

        let defaultName = 'indexroot';
        return (
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor='#FF8C69'
                    barStyle='light-content'
                    animated={true}
                    hidden={false}
                />
                <Navigator
                    style={{ flex: 1, }}
                    initialRoute={{ component: EnterPage }}
                    //切换动画
                    configureScene={(route) => {
                        let conf = Navigator.SceneConfigs.HorizontalSwipeJump;
                        conf.gestures = null;
                        return conf;
                    }}

                    renderScene={(route, navigator) => {

                        let Component = route.component;
                        if (Component) {
                            return <Component from={defaultName} {...route.params} navigator={navigator} />
                        }
                    }}
                />
            </View>

        );
    }

}
