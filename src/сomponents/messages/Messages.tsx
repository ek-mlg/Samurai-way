import React from 'react';
import s from './Messages.module.css';
import UserItem from "./messagesItems/UserItem";
import DialogItem from "./messagesItems/DialogItem";
import {MessagesPropsType} from "./MessagesContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../assets/formControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Messages:React.FC<MessagesPropsType> = (props) => {

    const {usersData, dialogsData, sendMessage} = props

    const usersElements = usersData.map((e) => <UserItem key={e.id} name={e.name} id={e.id}/>)

    const dialogsElements = dialogsData.map((e) => <DialogItem key={e.id} message={e.message}/>)

    const addNewMessage = (values: { newMessageBody: string }) => {
        sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {dialogsElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type FormDataType = {
    newMessageBody: string
}

const maxLength300 = maxLengthCreator(300)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[requiredField, maxLength300]}
                   name={'newMessageBody'}
                   placeholder={'Please, enter your message'}/>
            <button>send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>( {form: "dialogAddMessageForm"} )(AddMessageForm)

export default Messages;