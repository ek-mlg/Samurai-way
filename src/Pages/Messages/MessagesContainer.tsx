import React from 'react';
import Messages from "./Messages";
import {InitialStateType, sendMessageAC} from "../../Redux/messagesPage-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapDispatchPropsType = {
    sendMessage: (valueMessageText: string) => void
}

export type MessagesPropsType = InitialStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        usersData: state.messagesPage.usersData,
        valueMessageText: state.messagesPage.valueMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
