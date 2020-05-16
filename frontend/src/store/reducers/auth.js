import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: null,
    user: null,
    token: localStorage.getItem("token")
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
        case actionTypes.SIGNUP:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: action.payload
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default reducer;