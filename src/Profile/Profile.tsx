import React from 'react';
import './Profile.module.css.css';
import MyPosts from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={'Content'}>
            <div className={"Max_Profile_img"}>
                <img className={"Profile_img"}
                     src={"https://cdn.lifehacker.ru/wp-content/uploads/2021/02/pawel-czerwinski-ruJm3dBXCqw-unsplash_1613826124-scaled.jpg"}/>
            </div>
            <MyPosts />
        </div>
    );
};
