import {Dispatch} from "redux";
import {AppActionsType, AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthActionsType =
    ReturnType<typeof setUserDataAC>

export type InitialStateType = {
    id: undefined | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: undefined,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'SAMURAI-NETWORK/AUTH/SET-USER-DATA':
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

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {

    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserDataTC())
    } else {
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

