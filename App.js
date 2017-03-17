import React, {
    Component
} from 'react';
import {
    View,
} 
from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './app/Redux/store/store';

import Indexroot from './app/index';

const store = configureStore();


export default class app extends Component {


    render() {


        return (
            <Provider store={store}>
                <Indexroot />
            </Provider>

        );
    }

}