import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changePostAC} from "../../../Redux/profilePage-reducer";
import {StoreContext} from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const postData = state.profilePage.postData
                    const valuePostText = state.profilePage.valuePostText
                    const placeholderPost = state.profilePage.placeholderPost

                    const updateNewPostText = (newText: string) => {
                        store.dispatch(changePostAC(newText))
                    }
                    const addPostCallback = (valuePostText: string) => {
                        store.dispatch(addPostAC(valuePostText))
                    }

                    return (
                        <MyPosts updateNewPostText={updateNewPostText}
                                 addPostCallback={addPostCallback}
                                 postData={postData}
                                 valuePostText={valuePostText}
                                 placeholderPost={placeholderPost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;