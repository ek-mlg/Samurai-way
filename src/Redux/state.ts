import {StoreType} from "../types";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";

export let store: StoreType = {
    _stateData: {
        messagesPage: {
            usersData: [
                {id: "1", name: "Ilya"},
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
                {id: "3", message: "React", likeCounter: 23}
            ],
            valuePostText: "",
            placeholderPost: 'Please, enter your post'
        }
    },
    /*_addPost(postText: string) {
        const newPost = {
            id: v1(),
            message: postText,
            likeCounter: 0
        }
        this._stateData.profilePage.valuePostText = ''
        this._stateData.profilePage.postData.push(newPost)
        this._rerender()
    },
    _changePostText(newText: string) {
        this._stateData.profilePage.valuePostText = newText
        this._rerender()
    },
    _newMessageText(newMessage: string) {
        this._stateData.messagesPage.valueMessageText = newMessage
        this._rerender()
    },
    _sendMessage(messageText: string) {
        const newMessage = {
            id: v1(),
            message: messageText
        }
        this._stateData.messagesPage.valueMessageText = ''
        this._stateData.messagesPage.dialogsData.push(newMessage)
        this._rerender()
    },*/

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

        ProfilePageReducer(this._stateData.profilePage, action)
        MessagesPageReducer(this._stateData.messagesPage, action)

        this._rerender()

        /*if (action.type === 'ADD-POST') {
            this._addPost(action.postText)

        } else if (action.type === 'ADD-CHANGE-POST') {
            this._changePostText(action.newText)

        } else if (action.type === 'ADD-TEXT-MESSAGE') {
            this._newMessageText(action.newMessage)
        } else if (action.type === 'SEND-MESSAGE') {
            this._sendMessage(action.sendMessage)
        }*/
    }
}

/*export const addPostAC = (postText: string) => {
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
}*/
/*
export const newMessageTextAC = (newMessage: string) => {
    return {
        type: "ADD-TEXT-MESSAGE",
        newMessage: newMessage
    } as const
}
export const sendMessageAC = (sendMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        sendMessage: sendMessage
    } as const
}*/