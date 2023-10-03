import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, savePhotoTC, updateStatusTC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType,
    status: string,
    authorizedUserId: string | undefined,
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void,
    getStatus: (userId: string | undefined) => void,
    updateStatus: (status: string) => void,
    savePhoto: (photoFile: File) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {

    const {profile, getUserProfile, getStatus, updateStatus, status, savePhoto} = props
    let {userId} = useParams<{ userId: string }>()

    useEffect(() => {
        if (!userId) {
            getUserProfile(props.authorizedUserId);
            getStatus(props.authorizedUserId);
        } else {
            getUserProfile(userId);
            getStatus(userId);
        }
    }, [userId]);

    return <Profile {...props}
                    isOwner={!userId}
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    savePhoto={savePhoto}
    />
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC, getStatus: getStatusTC, updateStatus: updateStatusTC, savePhoto: savePhotoTC}),
    /*withAuthRedirect*/
)(ProfileContainer)