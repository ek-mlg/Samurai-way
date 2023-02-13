import React, {ChangeEvent} from 'react';
import s from './Messages.module.css';
import UserItem from "./MessagesItems/UserItem";
import DialogItem from "./MessagesItems/DialogItem";
import {ActionsType, DialogsDataPropsType, MessagesPageDataType, StoreType, UsersDataPropsType} from "../../types";
import {newMessageTextAC, sendMessageAC} from "../../Redux/messagesPage-reducer";

type MessagePropsType = {
    /*store: MessagesPageDataType,*/
    /*dispatch: (action: ActionsType)=> void*/
    usersData: UsersDataPropsType[],
    dialogsData: DialogsDataPropsType[],
    valueMessageText: string,
    placeholderMessage: string,
    newMessageText: (newMessage: string)=> void,
    sendMessage: (valueMessageText: string)=> void
}

const Messages:React.FC<MessagePropsType> = (props) => {

    const {usersData, dialogsData, valueMessageText, placeholderMessage, newMessageText, sendMessage} = props

    const usersElements = usersData.map((e) => <UserItem key={e.id} name={e.name} id={e.id}/>)

    const dialogsElements = dialogsData.map((e) => <DialogItem key={e.id} message={e.message}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = (e.currentTarget.value)
        // dispatch(newMessageTextAC(newMessage))
        newMessageText(newMessage)

    }
    const onClickHandler = () => {
        // dispatch(sendMessageAC(store.valueMessageText))
        sendMessage(valueMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {dialogsElements}
                <div>
                    <textarea placeholder={placeholderMessage} onChange={onChangeHandler} value={valueMessageText}/>
                    <button onClick={onClickHandler}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;