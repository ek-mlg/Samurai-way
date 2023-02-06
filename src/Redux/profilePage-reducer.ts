import React from 'react';
import {v1} from "uuid";
import {ActionsType, ProfilePageType, StateType, StoreType} from "../types";


export type ProfileActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changePostAC>

export const ProfilePageReducer = (state: ProfilePageType, action: ActionsType) => {

    /*switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: v1(), message: action.postText, likeCounter: 0}
            state.profilePage.valuePostText = ''
            state.profilePage.postData.push(newPost)
        }
    }*/

    if (action.type === 'ADD-POST') {
        const newPost = {
            id: v1(),
            message: action.postText,
            likeCounter: 0
        }
        state.valuePostText = ''
        state.postData.push(newPost)

    } else if (action.type === 'ADD-CHANGE-POST') {
        state.valuePostText = action.newText
    }
    return state;
};

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