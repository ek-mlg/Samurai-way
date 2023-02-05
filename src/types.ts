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
    changePostText: (newText: string) => void,
    addPost: (postText: string) => void,
    subscribe: (callback: () => void) => void,
    getState: () => StateType
}

