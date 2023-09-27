import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {MyPostPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MyPostPropsType> = (props) => {

    const {updateNewPostText, addPostCallback, postData, valuePostText, placeholderPost} = props

    const postElement = postData.map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

    const postOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        updateNewPostText(newText)
    }

    const addPost = () => {
        addPostCallback(valuePostText)
    }

    return (
        <div className={s.main}>
            <div className={s.textareaAndPost}></div>
            <div>
                <textarea
                    onChange={postOnChange}
                    value={valuePostText}
                    placeholder={placeholderPost}
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