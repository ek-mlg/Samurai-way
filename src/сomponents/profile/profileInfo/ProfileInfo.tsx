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

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <CircularProgress/>
    }

    return (
        <>
            <div className={"Max_Profile_img"}>
                {/*<img className={"Profile_img"}
                 src={"https://cdn.lifehacker.ru/wp-content/uploads/2021/02/pawel-czerwinski-ruJm3dBXCqw-unsplash_1613826124-scaled.jpg"}/>*/}
            </div>
            <h1>{props.profile.fullName}</h1>
            <span>{!props.profile.aboutMe ? "info about me is missing" : props.profile.aboutMe}</span>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.avatarContainer}>
                <img alt={'avatar'} className={s.avatar} src={!props.profile.photos.large ? photo : props.profile.photos.large}/>
            </div>
        </>
    );
};

export default ProfileInfo;