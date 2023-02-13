import React from 'react';
import Messages from "./Messages";
import {newMessageTextAC, sendMessageAC} from "../../Redux/messagesPage-reducer";
import {StoreContext} from "../../StoreContext";

const MessagesContainer = () => {

    /*const newMessageText = (newMessage: string) => {
        store.dispatch(newMessageTextAC(newMessage))
    }

    const sendMessage = (valueMessageText: string) => {
        store.dispatch(sendMessageAC(valueMessageText))
    }*/

    /*  const state = store.getState()

      const placeholderMessage = state.messagesPage.placeholderMessage
      const dialogsData = state.messagesPage.dialogsData
      const usersData = state.messagesPage.usersData
      const valueMessageText = state.messagesPage.valueMessageText*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const placeholderMessage = state.messagesPage.placeholderMessage
                    const dialogsData = state.messagesPage.dialogsData
                    const usersData = state.messagesPage.usersData
                    const valueMessageText = state.messagesPage.valueMessageText

                    const newMessageText = (newMessage: string) => {
                        store.dispatch(newMessageTextAC(newMessage))
                    }

                    const sendMessage = (valueMessageText: string) => {
                        store.dispatch(sendMessageAC(valueMessageText))
                    }
                    return (
                        <Messages newMessageText={newMessageText}
                                  sendMessage={sendMessage}
                                  placeholderMessage={placeholderMessage}
                                  dialogsData={dialogsData}
                                  usersData={usersData}
                                  valueMessageText={valueMessageText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default MessagesContainer;