// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
import SearchReducer from "./SearchReducer";
import RouterReducer from "./RouterReducer";

// IMPORT REDUCERS

// EXPORT APP REDUCER

const RootReducer = combineReducers({
    search: SearchReducer,
    router: RouterReducer,
});

export default RootReducer;