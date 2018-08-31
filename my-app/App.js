import React from 'react';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import reducers from './src/reducers';
import RootNavigation from './src/navigation/RootNavigation';

const reducer = combineReducers({
    ...reducers,
    routing: null
});

const store = createStore(reducer);

export default class App extends React.Component {

    componentDidMount() {
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        );
    }
}
