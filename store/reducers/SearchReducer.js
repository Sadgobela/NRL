import actionTypes from '../actions/actionTypes';

export const exampleInitialState = {
    data: null,
    isLoading: false
};

function SearchReducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.SEARCH:
            return {
                ...state,
                ...{ isLoading: true },
            };
        case actionTypes.SEARCH_PENDING:
            return {
                ...state,
                ...{ isLoading: true},
            };
        case actionTypes.SEARCH_FULFILLED:
            return {
                ...state,
                ...{ data: action.payload, isLoading: false },
            };
        case actionTypes.SEARCH_REJECTED:
            return {
                ...state,
                ...{ error: action.payload, isLoading: false },
            };
        default:
            return state;
    }
}

export default SearchReducer;