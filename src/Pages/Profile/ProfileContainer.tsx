import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer = (props: ProfilePropsType) => {

    const {userId} = useParams<{ userId: string }>()

    props.getUserProfile(userId)

    return (
        <>
            <Profile {...props} profile={props.profile}/>
        </>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {getUserProfile: getUserProfileTC})(ProfileContainer);