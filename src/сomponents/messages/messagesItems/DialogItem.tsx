import React from 'react';

type MessagePropsType = {
    message: string,

}
const DialogItem: React.FC<MessagePropsType> = ({message}) => {

    return (
        <div>
            <div>{message}</div>
        </div>
    );
};

export default DialogItem;