import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tracker: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TRACKER:
            {
                return {
                    ...state,
                    tracker: action.payload
                };
            }
        default:
            return state;
    }
}

export default reducer;