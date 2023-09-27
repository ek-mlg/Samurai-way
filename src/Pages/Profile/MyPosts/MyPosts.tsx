import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MyPosts: React.FC<MyPostPropsType> = (props) => {

    const {addPostCallback, postData} = props

    const postElement = postData.map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

    const addPost = (values: { newPostText: string }) => {
        addPostCallback(values.newPostText)
    }

    return (
        <div className={s.main}>
            <div className={s.textareaAndPost}>
                <h3>My posts</h3>
                <AddMessageFormRedux onSubmit={addPost}/>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
};

type FormDataType = {
    newPostText: string
}

const addNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'newPostText'}
                placeholder={'Please, enter your post'}
            />
            <button>add post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(addNewPostForm)

export default MyPosts;