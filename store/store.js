import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import RootReducer from './reducers/RootReducer';


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
    return createStore(
        RootReducer,
        initialState,
        bindMiddleware([thunk, promise]),
    );
}

export default configureStore;
