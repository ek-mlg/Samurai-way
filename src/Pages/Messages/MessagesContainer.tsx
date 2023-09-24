import React from 'react';
import Messages from "./Messages";
import {InitialStateType, newMessageTextAC, sendMessageAC} from "../../Redux/messagesPage-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapDispatchPropsType = {
    sendMessage: (valueMessageText: string) => void,
    newMessageText: (newMessage: string) => void
}

export type MessagesPropsType = InitialStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        placeholderMessage: state.messagesPage.placeholderMessage,
        dialogsData: state.messagesPage.dialogsData,
        usersData: state.messagesPage.usersData,
        valueMessageText: state.messagesPage.valueMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (valueMessageText: string) => {
            dispatch(sendMessageAC(valueMessageText))
        },
        newMessageText: (newMessage: string) => {
            dispatch(newMessageTextAC(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
