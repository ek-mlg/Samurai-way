import React from 'react';
import {createField, Input, Textarea} from "../../../assets/formControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> =
    ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>form</h1>
            <button>save</button>
            <h1>Full name: {createField("Full name",  [], "fullName", Input)}</h1>
            <b>looking for a job:</b>
            {createField("",  [], "lookingForAJob", Input, 'checkbox')}
            <p><b>My professional skills:</b></p>
            {createField("My professional skills",  [], "lookingForAJobDescription", Textarea)}
            <b>about me:</b>
            {createField("About me",  [], "aboutMe", Textarea)}
        </form>
    )
}

const ProfileDataReduxForm= reduxForm<ProfileDataFormType>({
    form: 'editProfile',
})(ProfileDataForm)
export default ProfileDataReduxForm;