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
    savePhoto: (photoFile: File) => void
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
            <h1>{profile.fullName}</h1>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <p>about me: {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
            <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            <div className={s.avatarContainer}>
                <img alt={'avatar'} className={s.avatar} src={profile.photos.large || photo}/>
            </div>
        </>
    );
};

export default ProfileInfo;