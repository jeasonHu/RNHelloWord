
import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Navigator,
    WebView,
    Platform,
    BackAndroid,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import TabViewItem from './TabViewItem';
import { toastShort } from './Utils/ToastUtil'

import UserInfo from './page/user/UserInfo';
import Animation from './Utils/Animation';

export default class MainPage extends Component {
    componentDidMount() {
        toastShort(this.props.from);
    }


    onBackAndroid = () => {
        var timestamp = (new Date()).valueOf();
        const { navigator } = this.props;
        if (navigator) {
            const routers = navigator.getCurrentRoutes();
            // toastShort('当前路由长度：' + routers.length);
            if (routers.length > 1) {
                //navigator.pop(); 
            } else {
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    BackAndroid.exitApp();
                } else {
                    toastShort('再按一次退出应用');
                }
            }
        }

        this.lastBackPressed = Date.now();

        return true;//默认行为  
    };


    renderContent(url) {
        return (

            <WebView
                style={{ flex: 1 }}
                ref="AAA"
                automaticallyAdjustContentInsets={false}
                source={{ uri: url }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scrollEnabled={true}
                renderLoading={() => {

                }}
                decelerationRate="normal"
                startInLoadingState={true} />
        );

    }



    render() {
        return (
            <View style={styles.container}>
                {/*<TouchableOpacity  >
                    <Text>MainPage from {this.props.from}</Text>
                </TouchableOpacity>
                <Text>https://sanwen8.cn/p/28aALep.html {'\n'}
                    react-native-scrollable-tab-view {'\n'}
                    ref="okButton"</Text>
                <Icon name="md-apps"  
                        size={100}
                        color="#FF7256" />
                        {this.renderContent('http://v2ex.com')} */}
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
                        {/*{this.renderContent('http://m.maizuo.com/v4/?co=maizuo#!/login?redirect_uri=%23!%2Fcenter')}*/}

                        <UserInfo from = {this.props.from} />
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
