import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { UsersActionTypes } from "../types/userTypes";

//Sign up action creators
const signUpRequest = () => {
    return {
        type: UsersActionTypes.SIGN_UP_REQUEST,
    };
};
const signUpSuccess = (user: any) => {
    return {
        type: UsersActionTypes.SIGN_UP_SUCCESS,
        payload: {
            user,
        },
    };
};
const signUpFailure = (error: string) => {
    return {
        type: UsersActionTypes.SIGN_UP_FAILURE,
        payload: error,
    };
};

export const signUp = (user: ISignIn) => {
    return function (dispatch: Dispatch) {
        dispatch(signUpRequest());
        console.log(user);
        axios({
            method: "POST",
            url: "http://localhost:5000/api/user/registration",
            data: user,
        })
            .then((response) => {
                console.log(response);
                const { data } = response.data;
                const { token } = response.data;
                localStorage.setItem("USER-TOKEN", token);
                dispatch(signUpSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(signUpFailure(error));
            });
    };
};

//Sign in action creators
const signInRequest = (): AnyAction => {
    return {
        type: UsersActionTypes.SIGN_IN_REQUEST,
    };
};
const signInSuccess = (token: string): AnyAction => {
    return {
        type: UsersActionTypes.SIGN_IN_SUCCESS,
        payload: {
            token,
        },
    };
};
const signInFailure = (error: any): AnyAction => {
    return {
        type: UsersActionTypes.SIGN_IN_ERROR,
        payload: error,
    };
};

interface ISignIn {
    email: string,
    password: string
}

export const signIn = (payload: ISignIn) => {
    return function (dispatch: Dispatch) {
        dispatch(signInRequest());
        axios({
            method: "POST",
            url: "http://localhost:5000/api/user/login",
            data: payload,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
            },
        })
            .then((response) => {
                const token: string = response.data.token;
                localStorage.setItem("USER-TOKEN", token);
                dispatch(signInSuccess(token));
            })
            .catch((error) => {
                dispatch(signInFailure(error));
            });
    };
};

//sign out action creators
export const signOutRequest = function (): AnyAction {
    return {
        type: UsersActionTypes.SIGN_OUT_REQUEST,
    };
};

export const signOutSuccess = function (): AnyAction {
    return {
        type: UsersActionTypes.SIGN_OUT_SUCCESS,
    };
};

export const signOutFailure = function (): AnyAction {
    return {
        type: UsersActionTypes.SIGN_OUT_FAILURE,
    };
};

export const signOut = function (history: any) {
    return function (dispatch: Dispatch) {
        dispatch(signOutRequest());
        localStorage.clear();
        if (localStorage.getItem("USER-TOKEN")) {
            dispatch(signOutFailure());
        } else {
            dispatch(signOutSuccess());
        }
    };
};