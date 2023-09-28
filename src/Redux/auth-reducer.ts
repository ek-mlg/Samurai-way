import {Dispatch} from "redux";
import {AppActionsType, AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";
import {AxiosResponse} from "axios";

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

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch<AppActionsType>) => {
        authAPI.me()
            .then((response: AxiosResponse) => {
                const {id, email, login} = response.data.data
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(id, email, login, true))
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then((response: AxiosResponse) => {

                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                }

            })
    }
}

export const logoutTC = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(null, null, null, false))
                }
            })
    }
}

