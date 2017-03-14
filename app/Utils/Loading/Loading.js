

import React, { PropTypes } from 'react';

import {
    StyleSheet,
    Dimensions,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import CircleProgress from './CircleProgress'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Loading extends React.Component {

    static LOADING_WIDTH = 100;
    static LOADING_HEIGHT = 80;
 

    constructor(props) {
        super(props);
        this.isShown = false;
        this.state = {
            loading: (<View />),
        } 
    }

    render() {
        return this.state.loading;
    }

    show(text, pointerEvents) {
        if (!this.isShown) {
            if (typeof (text) == 'boolean') {
                pointerEvents = text;
                text = '';
            }
            text = text ? text : 'Loading...';
            this.setState({
                loading: this._getLoading({
                    ...this.props,
                    text: text,
                    pointerEvents: pointerEvents
                })
            });
            
            this.isShown = true;
        }
    }

    dismiss() {
        if (this.isShown) {
            this.setState({
                loading: (<View />)
            });
            this.isShown = false;
            this.timeoutEvent && clearInterval(this.timeoutEvent);
        }
    }


    getisShown() {
        return this.isShown;
    }
 

    _getLoading(props) {
        
        return (
            <View pointerEvents={!!props && props.pointerEvents ? 'none' : 'auto'} style={styles.container}>
                <View pointerEvents={'none'} style={styles.loadingBg} />
                <View style={styles.loadingBody}>
                    <CircleProgress />
                    <Text style={styles.loadingText}>
                        {!!props && props.text ? props.text : 'AAAA'}
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    loadingBg: {
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    loadingBody: {
        width: 100,
        height: 80,
        position: 'absolute',
        top: SCREEN_HEIGHT / 2 - Loading.LOADING_HEIGHT / 2,
        left: SCREEN_WIDTH / 2 - Loading.LOADING_WIDTH / 2,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: 'white',
        backgroundColor: 'transparent'
    }
}); 
