import React from 'react';
import {ProfileType} from "../../../Redux/profilePage-reducer";
import {createField, Input, Textarea} from "../../../assets/formControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    deactivateEditMode: () => void
    profile: ProfileType
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType, PropsType> & PropsType> =
    ({ handleSubmit, deactivateEditMode, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>form</h1>
            <button>save</button>
            <h1>Full name: {createField("Full name",  [], "fullName", Input)}</h1>
            <b>looking for a job:</b>
            {createField("",  [], "lookingForAJob", Input, 'checkbox')}
            <p><b>My professional skills:</b>{profile.lookingForAJobDescription}</p>
            {createField("My professional skills",  [], "lookingForAJobDescription", Textarea)}
            <p><b>about me:</b> {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
            {createField("About me",  [], "aboutMe", Textarea)}
        </form>
    )
}

type FormDataType = {

}

const ProfileDataReduxForm= reduxForm<ProfileDataFormType, PropsType>({
    form: 'editProfile',
})(ProfileDataForm)
export default ProfileDataReduxForm;