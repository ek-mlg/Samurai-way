import {Dispatch} from "redux";
import {AppActionsType} from "./redux-store";
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

const initialState:InitialStateType = {
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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setUserDataAC = (id: number | null, email: string | null, login: string | null,) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            email,
            login
        }
    } as const
}

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch<AppActionsType>) => {
        authAPI.me()
            .then((response: AxiosResponse) => {
                const {id, login, email} = response.data.data
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(id, email, login))
                }
            })
    }
}