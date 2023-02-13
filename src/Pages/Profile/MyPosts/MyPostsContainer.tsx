import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changePostAC, InitialStateType} from "../../../Redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void,
    addPostCallback: (valuePostText: string) => void
}

export type MyPostPropsType = InitialStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        postData: state.profilePage.postData,
        valuePostText: state.profilePage.valuePostText,
        placeholderPost: state.profilePage.placeholderPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(changePostAC(newText))
        },
        addPostCallback: (valuePostText: string) => {
            dispatch(addPostAC(valuePostText))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;