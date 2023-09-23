import {v1} from "uuid";

export type MessageActionsType = ReturnType<typeof newMessageTextAC> | ReturnType<typeof sendMessageAC>

type UserType = {
    id: string,
    name: string
}

type DialogType = {
    id: string,
    message: string
}

export type InitialStateType = typeof initialState

const initialState = {
    usersData: [
        {id: "1", name: "Ilya2"},
        {id: "2", name: "Vitaliy"},
        {id: "3", name: "Mariya"},
        {id: "4", name: "Katerina"},
        {id: "5", name: "Manuk"},
        {id: "6", name: "Timon"},
    ] as UserType[],

    dialogsData: [
        {id: "1", message: 'Hi'},
        {id: "2", message: 'Yo'},
        {id: "3", message: 'Privet'},
    ] as DialogType[],

    valueMessageText: "",
    placeholderMessage: 'Please, enter your message',

    isAuth: false
}

export const MessagesPageReducer = (state: InitialStateType = initialState, action: MessageActionsType): InitialStateType => {

    switch (action.type) {

        case 'SEND-MESSAGE':
            return {
                ...state,
                dialogsData: [...state.dialogsData, {id: v1(), message: action.sendMessage}],
                valueMessageText: ""
            }

        case 'ADD-TEXT-MESSAGE':
            return {
                ...state,
                valueMessageText: action.newMessage
            }

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