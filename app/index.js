import React, {
    Component
} from 'react';
import {
    Navigator,
}
    from 'react-native';

import EnterPage from './Enterpage';


export default class indexroot extends Component {

    render() {
        let defaultName = 'indexroot';
        return (
            <Navigator
                initialRoute={{ component: EnterPage }}
                //切换动画
                configureScene={(route) => {
                    var conf = Navigator.SceneConfigs.HorizontalSwipeJump;
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

        );
    }

}
