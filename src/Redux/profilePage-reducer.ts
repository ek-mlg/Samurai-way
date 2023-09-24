import {v1} from "uuid";
import {useEffect} from "react";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType} from "./redux-store";
import photo from "../assets/images/avatar.png"


export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof setUserProfileAC>


export type PostType = {
    id: string,
    message: string,
    likeCounter: number,
}

export type ProfileType = {
    photos: PhotosType
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
    valuePostText: "",
    placeholderPost: 'Please, enter your post',
    profile: null,
}

export const ProfilePageReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST':

            return {
                ...state,
                postData: [...state.postData, {id: v1(), message: action.postText, likeCounter: 0}],
                valuePostText: ""
            }

        case 'ADD-CHANGE-POST':

            return {
                ...state,
                valuePostText: action.newText
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

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

export const changePostAC = (newText: string) => {
    return {
        type: "ADD-CHANGE-POST",
        newText: newText
    } as const
}

export const setUserProfileAC = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const getUserProfileTC = (userId: string | undefined) => {
    return (dispatch: Dispatch<AppActionsType>) => {

        useEffect(() => {
            profileAPI.getProfile(userId)
                .then(data => dispatch(setUserProfileAC(data))
                )
        }, [userId])
    }
}