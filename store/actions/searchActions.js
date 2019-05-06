import actionTypes from './actionTypes';
import {searchData} from '../dummyData';
export function getSearchData() {
    return {
        type: actionTypes.SEARCH_FULFILLED,
        payload: searchData(),
    };
}