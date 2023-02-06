import {StoreType} from "../types";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";

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
                {id: "3", message: "React", likeCounter: 23}
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

        ProfilePageReducer(this._stateData.profilePage, action)
        MessagesPageReducer(this._stateData.messagesPage, action)

        this._rerender()
    }
}