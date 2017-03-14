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
    

    render() {

        let defaultName = 'indexroot';
        return (
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor='#D1EEEE'
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
