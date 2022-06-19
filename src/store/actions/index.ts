import { LoginActionType, SignupActionType } from '../action-types';

interface LoginRequestAction {
    type: LoginActionType.LOGIN_REQUEST;
    payload: {
        email: string;
        password: string;
    }
}

interface LoginSuccessAction {
    type: LoginActionType.LOGIN_SUCCESS;
    payload: {
        user: any;
        token: string;
    }
}

interface LoginFailureAction {
    type: LoginActionType.LOGIN_FAILURE;
    payload: {
        error: any;
    }
}

interface SignupRequestAction {
    type: SignupActionType.SIGNUP_REQUEST;
    payload: {
        email: string;
        password: string;
    }
}
interface SignupSuccessAction {
    type: SignupActionType.SIGNUP_SUCCESS;
    payload: {
        user: any;
    }
}

interface SignupFailureAction {
    type: SignupActionType.SIGNUP_FAILURE;
    payload: {
        error: any;
    }
}

export type SignupAction = SignupRequestAction | SignupSuccessAction | SignupFailureAction;
export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;