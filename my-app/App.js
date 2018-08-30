import React from 'react';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import reducers from './src/reducers';
import RootNavigation from './src/navigation/RootNavigation';
import Chat from './src/components/Chat';

const reducer = combineReducers({
  ...reducers,
  routing: null
});

const store = createStore(reducer);

export default class App extends React.Component {
  
  render() {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    );
  }
}
