import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/profilePage-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import axios, {AxiosResponse} from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const ProfileContainer = (props: PropsType) => {

    useEffect( ()=> {
        const userId = props.match.params.userId
        if(!userId) {
            userId === '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: AxiosResponse) => {
                props.setUserProfile(response.data)
            })
    },[])

        return (
            <div>
                <Profile {...props} profile={props.profile} />
            </div>
        )
}

const mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withURLDataContainerComponent);