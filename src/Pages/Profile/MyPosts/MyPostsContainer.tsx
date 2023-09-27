import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, InitialStateType} from "../../../Redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    addPostCallback: (valuePostText: string) => void
}

export type MyPostPropsType = Omit<InitialStateType, 'status'> & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType) => {
    return {
        postData: state.profilePage.postData,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCallback: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;