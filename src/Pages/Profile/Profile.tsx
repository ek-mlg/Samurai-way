import React from 'react';
import './Profile.module.css.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo /ProfileInfo";
import {StoreType} from "../../types";

type ProfilePropsType = {
    store: StoreType
}

export const Profile:React.FC<ProfilePropsType> = (props) => {

    const state = props.store.getState()

    const postData = state.profilePage.postData
    const valuePostText = state.profilePage.valuePostText
    const addPostCallback = props.store.addPost.bind(props.store)
    const changePostText = props.store.changePostText.bind(props.store)


    return (
        <div className={'Content'}>
            <ProfileInfo />
            <MyPosts postData={postData} addPostCallback={addPostCallback} valuePostText={valuePostText} changePostText={changePostText}/>
        </div>
    );
};
