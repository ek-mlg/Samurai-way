import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {PostDataType, StoreType} from "../../../types";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
    postData: PostDataType[],
    addPostCallback: (postText: string) => void,
    valuePostText: string
    changePostText: (newPostText: string) => void,
}

const MyPosts: React.FC<MyPostsPropsType> = ({postData, addPostCallback, valuePostText, changePostText}) => {

    const postElement = postData.map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

    const addPost = () => {
        addPostCallback(valuePostText)
        changePostText("")
    }

    const postOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changePostText(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    const postOnFocus = () => {
        changePostText('')
    }
    const postOnBlur = () => {
        changePostText('test')
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