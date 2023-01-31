import React from 'react';
import s from './Messages.module.css';
import UserItem from "./MessagesItem/UserItem";
import DialogItem from "./MessagesItem/DialogItem";

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <UserItem name='Ilya' id={'1'}/>
                <UserItem name='Vitaliy' id={'2'}/>
                <UserItem name='Mariya' id={'3'}/>
                <UserItem name='Katerina' id={'4'}/>
                <UserItem name='Manuk' id={'5'}/>
            </div>

            <div className={s.messages}>
                <DialogItem message={'Hi'}/>
                <DialogItem message={'Yo'}/>
                <DialogItem message={'Privet'}/>
            </div>
        </div>
    );
};

export default Messages;