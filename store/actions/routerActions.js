import actionTypes from "./actionTypes";

export function setActiveRoute(route) {
    return {
        type: actionTypes.SET_ACTIVE_ROUTE,
        payload: new Promise((resolve) => {
            resolve(route);
        })
    }
}