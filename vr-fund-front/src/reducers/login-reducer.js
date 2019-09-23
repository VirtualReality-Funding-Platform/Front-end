import {LOGIN_SUCCESS,LOGIN_FAIL} from "../actions/types";

const initialState = {
    loggingIn: false,
    id: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
      
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.userId,
                loggingIn: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}