import {Dispatch} from "redux";
import {AppActionsType, AppThunkType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthActionsType =
    ReturnType<typeof setUserDataAC> |
    ReturnType<typeof getCaptchaURLAC>

export type InitialStateType = {
    id: undefined | string,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string
}

const initialState: InitialStateType = {
    id: undefined,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const AuthReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'SAMURAI-NETWORK/AUTH/SET-USER-DATA':
        case 'SAMURAI-NETWORK/AUTH/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setUserDataAC = (id: string | undefined, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SAMURAI-NETWORK/AUTH/SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getCaptchaURLAC = (captchaUrl: string) => {
    return {
        type: "SAMURAI-NETWORK/AUTH/GET-CAPTCHA-URL-SUCCESS",
        payload: {
            captchaUrl
        }
    } as const
}

export const getAuthUserDataTC = () => async (dispatch: Dispatch<AppActionsType>) => {
    try {
        const res = await authAPI.me()
        const {id, email, login} = res.data.data
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(id, email, login, true))
        }
    } catch (error) {
        console.error('Some error:', error);
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async dispatch => {

    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserDataTC())
    } else {
        if (res.data.resultCode === 10) {
            debugger
            await dispatch(getCaptchaURLTC())
        }
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(undefined, null, null, false))
    }
}

export const getCaptchaURLTC = () => async (dispatch: Dispatch<AppActionsType>) => {
    debugger
    const res = await securityAPI.getCaptchaURL()
    const captchaURL = res.data.url
    dispatch(getCaptchaURLAC(captchaURL))
}
