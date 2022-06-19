import { Dispatch } from 'redux';
import { LoginActionType } from '../action-types';
import { LoginAction } from '../actions';

export const loginRequest = (email: string, password: string) => {
    return (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionType.LOGIN_REQUEST,
            payload: {
                email,
                password,
            }
        })
    }
}
export const loginSuccess = (user: any, token: string): LoginAction => {
    return {
        type: LoginActionType.LOGIN_SUCCESS,
        payload: {
            user,
            token,
        }
    }
}
export const loginFailure = (error: any): LoginAction => {
    return {
        type: LoginActionType.LOGIN_FAILURE,
        payload: {
            error,
        }
    }
}