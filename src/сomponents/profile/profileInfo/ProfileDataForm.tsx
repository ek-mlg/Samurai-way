import React from 'react';
import {ProfileType} from "../../../Redux/profilePage-reducer";
import {createField, Input, Textarea} from "../../../assets/formControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    profile: ProfileType
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType, PropsType> & PropsType> =
    ({ handleSubmit, profile, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <h1>form</h1>
                <button>save</button>
                {error ? <div>{error}</div> : ''}
                <h1>Full name: {createField("Full name",  [], "fullName", Input)}</h1>
                <p><b>looking for a job:</b></p>
                {createField("",  [], "lookingForAJob", Input, 'checkbox')}
                <p><b>My professional skills:</b></p>
                {createField("My professional skills",  [], "lookingForAJobDescription", Textarea)}
                <p><b>about me:</b></p>
                {createField("About me",  [], "aboutMe", Textarea)}
                <p><b>Contacts:</b></p>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <b key={key}>{key}: {createField('Link',  [], "contacts." + key, Input)}</b>
                    )
                })}
            </form>
        )
    }

const ProfileDataReduxForm= reduxForm<ProfileDataFormType, PropsType>({
    form: 'editProfile',
})(ProfileDataForm)
export default ProfileDataReduxForm;