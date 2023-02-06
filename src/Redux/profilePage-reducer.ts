import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "../types";

export type ProfileActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changePostAC>

const initialState = {
    postData: [
        {id: "1", message: "Hello World!", likeCounter: 12},
        {id: "2", message: "This my first post!", likeCounter: 5},
        {id: "3", message: "React", likeCounter: 23}
    ],
    valuePostText: "",
    placeholderPost: 'Please, enter your post'
}

export const ProfilePageReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {

        case 'ADD-POST':
            let newPost = {id: v1(), message: action.postText, likeCounter: 0}
            state.valuePostText = ''
            state.postData.push(newPost)
            return state;

        case 'ADD-CHANGE-POST':
            state.valuePostText = action.newText
            return state;

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