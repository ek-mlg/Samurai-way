import React from 'react';
import {ProfileType} from "../../../Redux/profilePage-reducer";
import {CircularProgress} from "@material-ui/core";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import photo from '../../../assets/images/avatar.png'

type ProfileInfoPropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <CircularProgress/>
    }

    return (
        <>
            <h1>{profile.fullName}</h1>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <p>about me: {!profile.aboutMe ? "info is missing" : profile.aboutMe}</p>
            <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            <div className={s.avatarContainer}>
                <img alt={'avatar'} className={s.avatar} src={!profile.photos.large ? photo : profile.photos.large}/>
            </div>
        </>
    );
};

export default ProfileInfo;