import {ProfileActionsType} from "./Redux/profilePage-reducer";
import {MessageActionsType} from "./Redux/messagesPage-reducer";

export type PostDataType = {
    id: string,
    message: string,
    likeCounter: number,
}

type DialogsDataPropsType = {
    id: string,
    message: string
}

type UsersDataPropsType = {
    id: string,
    name: string
}

export type ProfilePageType = {
    postData: PostDataType[]
    valuePostText: string
    placeholderPost: string
}

export type MessagesPageDataType = {
    usersData: UsersDataPropsType[],
    dialogsData: DialogsDataPropsType[],
    valueMessageText: string,
    placeholderMessage: string

}

export type StateType = {
    messagesPage: MessagesPageDataType,
    profilePage: ProfilePageType
}

export type StoreType = {
    _stateData: StateType,
    _rerender: () => void,
   /* _changePostText: (newText: string) => void,
    _addPost: (postText: string) => void,
    _newMessageText: (newMessage: string) => void,
    _sendMessage: (sendMessage: string) => void,*/
    subscribe: (callback: () => void) => void,
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ProfileActionsType | MessageActionsType

/*export type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}*/





