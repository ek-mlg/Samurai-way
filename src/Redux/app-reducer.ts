import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunkType} from "./redux-store";

export type AppActionsType =
    ReturnType<typeof setInitializedSuccessAC>

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false,
}

export const AppReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const setInitializedSuccessAC = () => {
    return {
        type: "SET-INITIALIZED-SUCCESS",
    } as const
}

export const initializeAppTC = (): AppThunkType => async dispatch => {

    await dispatch(getAuthUserDataTC())
    dispatch(setInitializedSuccessAC())

}


