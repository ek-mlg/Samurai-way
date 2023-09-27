import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";
import {compose} from "redux";

type MapStatePropsType = {
    profile: null,
    status: string,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {
    const {profile, getUserProfile, getStatus} = props
    let {userId} = useParams<{ userId: string }>()

    if (!userId) userId = "27582"

    getUserProfile(userId)
    getStatus(userId)
    console.log(profile)

    return <Profile {...props} profile={profile} status={props.status} updateStatus={props.updateStatus}/>
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC, getStatus: getStatusTC, updateStatus: updateStatusTC}),
    /*withAuthRedirect*/
)(ProfileContainer)