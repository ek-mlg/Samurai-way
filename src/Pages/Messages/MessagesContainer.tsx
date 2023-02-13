import React from 'react';
import Messages from "./Messages";
import {StoreType} from "../../types";
import {newMessageTextAC, sendMessageAC} from "../../Redux/messagesPage-reducer";

type MessagesContainerType = {
    store: StoreType
}

const MessagesContainer:React.FC<MessagesContainerType> = ({store}) => {

    const newMessageText = (newMessage: string) => {
        store.dispatch(newMessageTextAC(newMessage))
    }

    const sendMessage = (valueMessageText: string) => {
        store.dispatch(sendMessageAC(valueMessageText))
    }

    const state = store.getState()

    const placeholderMessage = state.messagesPage.placeholderMessage
    const dialogsData = state.messagesPage.dialogsData
    const usersData = state.messagesPage.usersData
    const valueMessageText = state.messagesPage.valueMessageText

    return (<Messages newMessageText={newMessageText} sendMessage={sendMessage} placeholderMessage={placeholderMessage} dialogsData={dialogsData} usersData={usersData} valueMessageText={valueMessageText}/>);
};

export default MessagesContainer;