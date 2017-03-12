
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
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import TabViewItem from './TabViewItem'; 

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['电影', '影院', '发现', '我的'],
            tabIconNames: ['md-videocam', 'ios-albums', 'ios-paper', 'ios-person'],
        };
    }

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
                    renderTabBar={() => <TabViewItem tabNames={this.state.tabNames} tabIconNames={this.state.tabIconNames} />}
                    select
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
                        {this.renderContent('http://m.maizuo.com/v4/?co=maizuo#!/login?redirect_uri=%23!%2Fcenter')}
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
