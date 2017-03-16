import React, {
    Component
} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Navigator,
    Platform,
    BackAndroid,
} from 'react-native';
import ScrollableTabView, {
    DefaultTabBar,
    ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import TabViewItem from './TabViewItem';
import { toastShort } from './Utils/ToastUtil'
import MyWebView from './Utils/WebView'



import UserInfo from './page/user/UserInfo';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            console.log('Main  componentDidMount');
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            console.log('Main  componentWillUnmount');
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const {
            navigator
        } = this.props;
        if (navigator) {
            const routers = navigator.getCurrentRoutes();
            console.log('当前路由长度：' + routers.length);
            if (routers.length > 1) {
                navigator.pop();
            } else {
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    BackAndroid.exitApp();
                } else {
                    toastShort('再按一次退出应用');
                }
            }
        }

        this.lastBackPressed = (new Date()).valueOf();

        return true;
    };


    renderContent(url) {
        return (

            <MyWebView url={url} />

        );

    }



    render() {
        return (
            <View style={styles.container}>

                <ScrollableTabView
                    style={styles.container}
                    ref="tabView"
                    tabBarPosition="bottom"
                    renderTabBar={() => <TabViewItem />}
                    scrollWithoutAnimation={true}>

                    <View style={styles.tab} tabLabel='key1'>
                        {this.renderContent('http://m.maizuo.com/v4/?co=maizuo#!/film/now-playing')}
                    </View>

                    <View style={styles.tab} tabLabel='key2'>
                        {this.renderContent('http://m.maizuo.com/v4/?co=maizuo#!/cinema')}
                    </View>

                    <View style={styles.tab} tabLabel='key3'>
                        {this.renderContent('http://m.maizuo.com/v4/?co=maizuo#!/')}
                    </View>

                    <View style={styles.tab} tabLabel='key4'>
                        <UserInfo from={this.props.from} navigator={this.props.navigator} />
                    </View>


                </ScrollableTabView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tab: {
        backgroundColor: '#E8E8E8',
        flex: 1
    },

});