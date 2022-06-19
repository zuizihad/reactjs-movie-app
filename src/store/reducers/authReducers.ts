import { LoginActionType, SignupActionType } from '../action-types';
import { LoginAction, SignupAction } from '../actions';

const initialState = {
    token: null,
    loggingIn: false,
    loggedIn: false,
    user: null,
    error: null,
};

type State = {
    token: string | null,
    loggingIn: boolean,
    loggedIn: boolean,
    user: any,
    error: any,
}

const reducer = (state: State = initialState, action: LoginAction) => {
    switch (action.type) {
        case LoginActionType.LOGIN_REQUEST:
            return {
                ...state,
                token: null,
                loggingIn: true,
                loggedIn: false,
                user: null,
                error: null,
            }
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.payload?.user,
                token: action.payload?.token,
                error: null,
            }
        case LoginActionType.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: null,
                token: null,
                error: action.payload?.error,
            }
        default:
            return state;
    }
}

export default reducer;