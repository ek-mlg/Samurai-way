import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo /ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: null
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.Container}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};
