import React, {ChangeEvent} from 'react';
import s from './Messages.module.css';
import UserItem from "./MessagesItems/UserItem";
import DialogItem from "./MessagesItems/DialogItem";
import {ActionsType, MessagesPageDataType} from "../../types";
import {newMessageTextAC, sendMessageAC} from "../../Redux/state";

type MessagePropsType = {
    messagesPageData: MessagesPageDataType,
    dispatch: (action: ActionsType) => void
}

const Messages:React.FC<MessagePropsType> = (props) => {

    const {messagesPageData, dispatch} = props

    const usersElements = messagesPageData.usersData.map((e) => <UserItem key={e.id} name={e.name} id={e.id}/>)

    const dialogsElements = messagesPageData.dialogsData.map((e) => <DialogItem key={e.id} message={e.message}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = (e.currentTarget.value)
        dispatch(newMessageTextAC(newMessage))
    }
    const onClickHandler = () => {
        dispatch(sendMessageAC(messagesPageData.valueMessageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {dialogsElements}
                <div>
                    <textarea placeholder={messagesPageData.placeholderMessage} onChange={onChangeHandler} value={messagesPageData.valueMessageText}/>
                    <button onClick={onClickHandler}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;