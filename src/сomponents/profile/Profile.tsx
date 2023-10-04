import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profilePage-reducer";

type ProfilePropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean,
    savePhoto: (photoFile: File) => void,

}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.Container}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
};
