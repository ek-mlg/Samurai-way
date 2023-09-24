import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: null,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {
    const {profile, getUserProfile} = props

    const {userId} = useParams<{ userId: string }>()
    getUserProfile(userId)
    return <Profile {...props} profile={profile}/>
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC}),
    withAuthRedirect
)(ProfileContainer)