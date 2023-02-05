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
}

export type MessagesPageDataType = {
    usersData: UsersDataPropsType[],
    dialogsData: DialogsDataPropsType[]
}

export type StateType = {
    messagesPage: MessagesPageDataType,
    profilePage: ProfilePageType
}

export type StoreType = {
    _stateData: StateType,
    _rerender: () => void,
    _changePostText: (newText: string) => void,
    _addPost: (postText: string) => void,
    subscribe: (callback: () => void) => void,
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

type AddChangePostActionType = {
    type: 'ADD-CHANGE-POST',
    newText: string
}

export type ActionsType = AddPostActionType | AddChangePostActionType

