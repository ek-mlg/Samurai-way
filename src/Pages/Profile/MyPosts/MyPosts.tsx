import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {ActionsType, PostDataType, StoreType} from "../../../types";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
    postData: PostDataType[],
    valuePostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({postData,valuePostText, dispatch}) => {

    const postElement = postData.map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

    const addPost = () => {
        dispatch({type: "ADD-POST", postText: valuePostText})
    }

    const postOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        dispatch({type: "ADD-CHANGE-POST", newText: newText})
    }
    const postOnFocus = () => {
    }
    const postOnBlur = () => {
    }


    return (
        <div className={s.main}>
            <div className={s.textareaAndPost}></div>
            <div>
                <textarea
                    onFocus={postOnFocus}
                    onBlur={postOnBlur}
                    onChange={postOnChange}
                    value={valuePostText}
                />

            </div>
            <div>
                <button
                    onClick={addPost}
                >
                    add post
                </button>
            </div>
            <div>
                {postElement}
            </div>

        </div>
    );
};

export default MyPosts;