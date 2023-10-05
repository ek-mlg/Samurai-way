import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType, AppRootStateType, AppThunkType} from "./redux-store";

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof updateStatusAC>
    | ReturnType<typeof savePhotoSuccessAC>


export type PostType = {
    id: string,
    message: string,
    likeCounter: number,
}

export type ProfileType = {
    photos: PhotosType,
    fullName: string,
    aboutMe: string,
    lookingForAJobDescription: string,
    lookingForAJob: boolean,
    contacts: ContactsType
}

type ContactsType = {
    github: string | null,
    vk: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    website: string | null,
    youtube: string | null,
    mainLink: string | null
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
    profile: {
        photos: {large: "", small: ""},
        fullName: "",
        aboutMe: "",
        lookingForAJob: false
    } as ProfileType,
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
            return {...state, status: action.payload.status}
        }

        case 'SET-USER-PROFILE':

            return {
                ...state,
                profile: action.profile
            }

        case 'SAVE-PHOTO':

            return {...state, profile: {...state.profile, photos: action.payload.photos}}

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

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const savePhotoSuccessAC = (photos: PhotosType) => {
    return {
        type: "SAVE-PHOTO",
        payload: {
            photos: photos
        }
    } as const
}


export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch<AppActionsType>) => {

    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(data))

}


export const getStatusTC = (userId: string) => async (dispatch: Dispatch<AppActionsType>) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<AppActionsType>) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(updateStatusAC(status))
    }
}
export const savePhotoTC = (file: File) => async (dispatch: Dispatch<AppActionsType>) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}
export const saveProfileTC = (profile: ProfileType): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    const userId = getState().auth.id
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        if (userId) {
            await dispatch(getUserProfileTC(userId))
        }
    }
}