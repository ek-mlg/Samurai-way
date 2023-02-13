import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo /ProfileInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../Redux/state";

export const Profile = () => {


    return (
        <div className={s.Container}>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    );
};
