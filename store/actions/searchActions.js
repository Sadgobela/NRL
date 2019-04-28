import actionTypes from "./actionTypes";
import {searchData} from '../dummyData';
export function getSearchData() {
    return {
        type: actionTypes.SEARCH,
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(searchData());
            }, 0)
        })
    }
}