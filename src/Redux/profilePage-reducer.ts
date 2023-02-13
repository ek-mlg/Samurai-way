import {v1} from "uuid";


export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>

export type PostType = {
    id: string,
    message: string,
    likeCounter: number,
}

export type InitialStateType = typeof initialState

const initialState = {
    postData: [
        {id: "1", message: "Hello World!", likeCounter: 12},
        {id: "2", message: "This my first post!", likeCounter: 5},
        {id: "3", message: "React", likeCounter: 23}
    ] as PostType[],
    valuePostText: "",
    placeholderPost: 'Please, enter your post'
}

export const ProfilePageReducer = (state:InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST':
            const newPost = {id: v1(), message: action.postText, likeCounter: 0}

            const stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.valuePostText = ''

            return stateCopy;

        case 'ADD-CHANGE-POST':

            return {
                ...state,
                valuePostText: action.newText
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