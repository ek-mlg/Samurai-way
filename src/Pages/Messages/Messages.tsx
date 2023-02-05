import React from 'react';
import s from './Messages.module.css';
import UserItem from "./MessagesItems/UserItem";
import DialogItem from "./MessagesItems/DialogItem";
import {MessagesPageDataType} from "../../types";


const Messages:React.FC<MessagesPageDataType> = (props) => {

    const {usersData, dialogsData} = props

    const usersElements = usersData?.map((e) => <UserItem name={e.name} id={e.id}/>)

    const dialogsElements = dialogsData?.map((e) => <DialogItem message={e.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {dialogsElements}
            </div>
        </div>
    );
};

export default Messages;