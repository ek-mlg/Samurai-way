import {v1} from "uuid";
import {useEffect} from "react";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType} from "./redux-store";

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof updateStatusAC>


export type PostType = {
    id: string,
    message: string,
    likeCounter: number,
}

export type ProfileType = {
    photos: PhotosType,
    fullName: string,
    aboutMe: string,
}

type PhotosType = {
    large: string,
    small: string
}

export type InitialStateType = typeof initialState

const initialState = {
    postData: [
        {id: "1", message: "Hello World!", likeCounter: 12},
        {id: "2", message: "This my first post!", likeCounter: 5},
        {id: "3", message: "React", likeCounter: 23}
    ] as PostType[],
    profile: null,
    status: ""
}

export const ProfilePageReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST':
            return {
                ...state,
                postData: [...state.postData, {id: v1(), message: action.newPostText, likeCounter: 0}],
            }

        case 'SET-STATUS':

            return {
                ...state,
                status: action.status
            }
        case "UPDATE-STATUS": {
            return  {...state, status: action.payload.status}
        }

        case 'SET-USER-PROFILE':

            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const setUserProfileAC = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status: status
    } as const
}

export const updateStatusAC = (status: string) => {
    return {
        type: "UPDATE-STATUS",
        payload: {
            status: status
        }
    } as const
}

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<AppActionsType>) => {
        useEffect(() => {
            profileAPI.getProfile(userId)
                .then(data => dispatch(setUserProfileAC(data))
                )
        }, [userId])

    }
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch<AppActionsType>) => {

        useEffect(() => {
            profileAPI.getStatus(userId)
                .then(res => dispatch(setStatusAC(res.data))
                )
        }, [userId])
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(updateStatusAC(status))
                }
            })
    }
}