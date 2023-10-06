import React, {ChangeEvent, Key, useState} from 'react';
import {ProfileType} from "../../../Redux/profilePage-reducer";
import {CircularProgress} from "@material-ui/core";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import photo from '../../../assets/images/avatar.png'
import {ProfileDataFormType} from "./ProfileDataForm";
import ProfileDataReduxForm from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photoFile: File) => void,
    saveProfile: (formData: ProfileDataFormType) => void
}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <CircularProgress/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const activateEditMode = () => {
        setEditMode(!editMode)
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        Promise.resolve(saveProfile(formData))
            .then(() => {
                setEditMode(!editMode);
            })
    }

    return (
        <div style={{marginTop: '100px'}}>
            {editMode
                ?
                <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                :
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={activateEditMode}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <div className={s.avatarContainer}>
                <img alt={'avatar'} className={s.avatar} src={profile.photos.large || photo}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: ()=> void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <h1>Full name: {profile.fullName}</h1>
            <p><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>}
            <p><b>about me:</b> {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
            <p><b>Contacts:</b></p>

            {
                profile && profile.contacts
                    ?
                    Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key}
                                         contactsTitle={key}
                                         contactsValue={profile.contacts[key]}
                        />
                    })
                    :
                    <> </>
            }
        </>
    )
}

type ContactsPropsType = {
    contactsTitle: string
    contactsValue: string | null | undefined
}

const Contacts: React.FC<ContactsPropsType> = ({contactsTitle, contactsValue}) => {

    return (
        <div>
            <b>{contactsTitle}: </b>{contactsValue}
        </div>
    );
}

export default ProfileInfo;