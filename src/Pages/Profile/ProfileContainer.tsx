import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";

type MapStatePropsType = {
    profile: null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer = (props: ProfilePropsType) => {

    const {userId} = useParams<{ userId: string }>()

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: AxiosResponse) => {
                props.setUserProfile(response.data)
            })
    }, [userId])

    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {

    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer);