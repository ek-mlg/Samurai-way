import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profilePage-reducer";
import {ProfileDataFormType} from "./profileInfo/ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean,
    savePhoto: (photoFile: File) => void,
    saveProfile: (formData: ProfileDataFormType) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.Container}>
            <ProfileInfo saveProfile={props.saveProfile} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
};
