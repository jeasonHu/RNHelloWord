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
                initialRoute={{ component:EnterPage }}
                //切换动画
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
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
