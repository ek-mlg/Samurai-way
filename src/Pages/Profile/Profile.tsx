import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo /ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {

    return (
        <div className={s.Container}>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    );
};
