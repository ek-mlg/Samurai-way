import {v1} from "uuid";
import {ActionsType} from "../types";

export type MessageActionsType =
    ReturnType<typeof newMessageTextAC> |
    ReturnType<typeof sendMessageAC>

const initialState = {
        usersData: [
            {id: "1", name: "Ilya2"},
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
}

export const MessagesPageReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {

        case 'SEND-MESSAGE':
            const newMessage = {id: v1(), message: action.sendMessage}
            state.valueMessageText = ''
            state.dialogsData.push(newMessage)
            return state;

        case 'ADD-TEXT-MESSAGE':
            state.valueMessageText = action.newMessage
            return state;

        default:
            return state;
    }
}


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
}