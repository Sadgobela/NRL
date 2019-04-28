import actionTypes from '../actions/actionTypes';

export const exampleInitialState = {
    activeRoute: '/',
};

function RouterReducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_ROUTE_FULFILLED:
            return {
                ...state,
                activeRoute: action.payload,
            };
        default:
            return state;
    }
}

export default RouterReducer;