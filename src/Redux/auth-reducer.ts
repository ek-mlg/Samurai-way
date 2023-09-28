import {Dispatch} from "redux";
import {AppActionsType, AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";
import {AxiosResponse} from "axios";
import {stopSubmit} from "redux-form";

export type AuthActionsType =
    ReturnType<typeof setUserDataAC>

export type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserDataTC = () => async (dispatch: Dispatch<AppActionsType>) => {
    const res = await authAPI.me()
    const {id, email, login} = res.data.data
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}


/*ниже для себя*/
export const _logoutTC = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(null, null, null, false))
                }
            })
    }
}

