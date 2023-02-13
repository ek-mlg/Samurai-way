import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changePostAC} from "../../../Redux/profilePage-reducer";
import {StoreType} from "../../../types";

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer:React.FC<MyPostsContainerType> = ({store}) => {

    const updateNewPostText = (newText: string) => {
        store.dispatch(changePostAC(newText))
    }
    const addPostCallback = (valuePostText: string) => {
        store.dispatch(addPostAC(valuePostText))
    }

    /*const dispatch = store.dispatch.bind(store)*/

    const state = store.getState()
    const postData = state.profilePage.postData
    const valuePostText = state.profilePage.valuePostText
    const placeholderPost = state.profilePage.placeholderPost

    return (<MyPosts updateNewPostText={updateNewPostText} addPostCallback={addPostCallback} postData={postData} valuePostText={valuePostText} placeholderPost={placeholderPost}/>);
};

export default MyPostsContainer;