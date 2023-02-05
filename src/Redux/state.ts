import {v1} from "uuid";
import {StoreType} from "../types";

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
        ]
    },

    profilePage: {
        postData: [
            {id: "1", message: "Hello World!", likeCounter: 12},
            {id: "2", message: "This my first post!", likeCounter: 5},
            {id: "3", message: "React", likeCounter: 23}
        ],
            valuePostText: "Please, enter your text"
    }

},
    addPost(postText: string) {
        const newPost = {
            id: v1(),
            message: postText,
            likeCounter: 0
        }
        this._stateData.profilePage.postData.push(newPost)
        this._rerender()
    },
    changePostText(newText: string) {
        this._stateData.profilePage.valuePostText = newText
        this._rerender()
    },
    subscribe(callback) {
        this._rerender = callback
        console.log('state')
    },
    _rerender() {
        console.log("Hello")
    },
    getState() {
        return this._stateData
    }
}





