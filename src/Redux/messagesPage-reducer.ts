import {v1} from "uuid";
import {ActionsType, MessagesPageDataType, StateType, StoreType} from "../types";

export type MessageActionsType =
ReturnType<typeof newMessageTextAC> |
ReturnType<typeof sendMessageAC>

export const MessagesPageReducer = (state: MessagesPageDataType, action: ActionsType) => {

    if (action.type === 'SEND-MESSAGE') {
        const newMessage = {
            id: v1(),
            message: action.sendMessage
        }
        state.valueMessageText = ''
        state.dialogsData.push(newMessage)

    } else if (action.type === 'ADD-TEXT-MESSAGE') {
        state.valueMessageText = action.newMessage
    }
    return state;
};


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