import React from 'react';
import Preloader from "../../../Components /Preloader/Preloader";
import {ProfileType} from "../../../Redux/profilePage-reducer";

type ProfileInfoPropsType = {
    profile: null | ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
        <div className={"Max_Profile_img"}>
            {/*<img className={"Profile_img"}
                 src={"https://cdn.lifehacker.ru/wp-content/uploads/2021/02/pawel-czerwinski-ruJm3dBXCqw-unsplash_1613826124-scaled.jpg"}/>*/}
        </div>
        <div>
            <img src={props.profile.photos.large}/>
        </div>
        </>
    );
};

export default ProfileInfo;