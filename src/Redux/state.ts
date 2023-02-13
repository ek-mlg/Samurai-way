import {ProfileActionsType} from "./profilePage-reducer";
import {MessageActionsType} from "./messagesPage-reducer";

export type ActionsType = ProfileActionsType | MessageActionsType

type PostDataType = {
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

type ProfilePageType = {
    postData: PostDataType[]
    valuePostText: string
    placeholderPost: string
}

type MessagesPageDataType = {
    usersData: UsersDataPropsType[],
    dialogsData: DialogsDataPropsType[],
    valueMessageText: string,
    placeholderMessage: string,
}


type StateType = {
    messagesPage: MessagesPageDataType,
    profilePage: ProfilePageType
}

type StoreType = {
    _stateData: StateType,
    _rerender: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export let store: StoreType = {
    _stateData: {
        messagesPage: {
            usersData: [
                {id: "1", name: "Ilya1"},
                {id: "2", name: "Vitaliy"},
                {id: "3", name: "Mariya"},
                {id: "4", name: "Katerina"},
                {id: "5", name: "Manuk"},
                {id: "6", name: "Timon"},
            ],

            dialogsData: [
                {id: "1", message: 'Hi'},
                {id: "2", message: 'Yo'},
                {id: "3", message: 'Privet'},
            ],

            valueMessageText: "",
            placeholderMessage: 'Please, enter your message'
        },

        profilePage: {
            postData: [
                {id: "1", message: "Hello World!", likeCounter: 12},
                {id: "2", message: "This my first post!", likeCounter: 5},
                {id: "3", message: "React", likeCounter: 23},
                {id: "3", message: "i'm state.ts", likeCounter: 10}

            ],
            valuePostText: "",
            placeholderPost: 'Please, enter your post'
        }
    },

    _rerender() {
        console.log("Hello")
    },
    subscribe(callback) {
        this._rerender = callback
        console.log('state')
    },
    getState() {
        return this._stateData
    },

    dispatch(action) {

        /*ProfilePageReducer(this._stateData.profilePage, action)
        MessagesPageReducer(this._stateData.messagesPage, action)*/

        this._rerender()
    }
}