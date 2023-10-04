import React, {ChangeEvent} from 'react';
import {ProfileType} from "../../../Redux/profilePage-reducer";
import {CircularProgress} from "@material-ui/core";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import photo from '../../../assets/images/avatar.png'

type ProfileInfoPropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photoFile: File) => void,
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <CircularProgress/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <>
            <ProfileData profile={profile}/>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <Contacts profile={profile}/>
            <div className={s.avatarContainer}>
                <img alt={'avatar'} className={s.avatar} src={profile.photos.large || photo}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
        </>
    );
};


const ProfileData: React.FC<{ profile: ProfileType }> = ({profile}) => {
    return (
        <>
            <h1>Full name: {profile.fullName}</h1>
            <p><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && <p>My skills: {profile.lookingForAJobDescription}</p>}
            <p><b>about me:</b> {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
        </>
    )
}

const ProfileDataForm: React.FC<{ profile: ProfileType }> = ({profile}) => {
    return (
        <>
            <h1>Full name: {profile.fullName}</h1>
            <p><b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && <p>My skills: {profile.lookingForAJobDescription}</p>}
            <p><b>about me:</b> {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
        </>
    )
}

const Contacts: React.FC<{ profile: ProfileType }> = ({profile}) => {
    if (!profile.contacts) {
        return null;
    }
    return (
        <>
            <p><b>facebook:</b> {profile.contacts.facebook || 'N/A'}</p>
            <p><b>github:</b> {profile.contacts.github || 'N/A'}</p>
            <p><b>vk:</b> {profile.contacts.vk || 'N/A'}</p>
            <p><b>instagram:</b> {profile.contacts.instagram || 'N/A'}</p>
            <p><b>twitter:</b> {profile.contacts.twitter || 'N/A'}</p>
            <p><b>mainLink:</b> {profile.contacts.mainLink || 'N/A'}</p>
            <p><b>website:</b> {profile.contacts.website || 'N/A'}</p>
            <p><b>youtube:</b> {profile.contacts.youtube || 'N/A'}</p>
        </>
    )
}

export default ProfileInfo;