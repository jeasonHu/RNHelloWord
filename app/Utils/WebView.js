
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    WebView,
} from 'react-native';
 
import Loading from './Loading/Loading'
 

export default class MyWebView extends Component { 



    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{ flex: 1 }}
                    ref="webview"
                    automaticallyAdjustContentInsets={false}
                    source={{ uri: this.props.url }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    renderLoading={() => {
                        return (
                            <Loading initshow = {true}/>
                        )
                    }}
                    scrollEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true} />
 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
 
});
