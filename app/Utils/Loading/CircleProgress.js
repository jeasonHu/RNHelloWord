import React from 'react';

import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

export default class CircleProgress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*if (Platform.OS === 'ios') {
            return (
                <ActivityIndicator
                    animating={true}
                    color='white'
                    style={styles.centering}
                    size='small'
                />
            );
        } else {
            return (
                <ProgressBarAndroid styleAttr="Inverse" color='white' />
            );
        }*/
        return (
            <ActivityIndicator
                animating={true}
                color='white'
                style={styles.centering}
                size='large'
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {

    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40, 
    }

});

