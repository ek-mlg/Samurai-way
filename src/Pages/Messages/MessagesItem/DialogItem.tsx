import React from 'react';

type MessagePropsType = {
    message: string
}
const DialogItem:React.FC<MessagePropsType> = ({message}) => {

    return (
        <div>{message}</div>
    );
};

export default DialogItem;