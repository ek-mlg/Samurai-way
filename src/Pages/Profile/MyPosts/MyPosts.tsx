import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {ActionsType, PostDataType, StoreType} from "../../../types";
import s from "./MyPosts.module.css";
import {addPostAC, changePostAC} from "../../../Redux/state";

type MyPostsPropsType = {
    postData: PostDataType[],
    valuePostText: string
    placeholderPost: string
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {postData,valuePostText, dispatch, placeholderPost} = props

    const postElement = postData.map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

    const postOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        dispatch(changePostAC(newText))
    }

    const addPost = () => {
        dispatch(addPostAC(valuePostText))
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