// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
import SearchReducer from "./SearchReducer";

// IMPORT REDUCERS

// EXPORT APP REDUCER

const RootReducer = combineReducers({
    search: SearchReducer,
});

export default RootReducer;