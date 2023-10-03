import React from 'react';
import Post from "./post/Post";
import s from "./MyPosts.module.css";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../../assets/formControls/FormsControls";

const MyPosts: React.FC<MyPostPropsType> = React.memo((props) => {

    const {addPostCallback, postData} = props

    const postElement =
        [...postData]
            .reverse()
            .map((e) => <Post key={e.id} message={e.message} likeCounter={e.likeCounter}/>)

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
});

type FormDataType = {
    newPostText: string
}

const maxLength300 = maxLengthCreator(300)

const addNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newPostText'}
                placeholder={'Please, enter your post'}
                validate={[requiredField, maxLength300]}
            />
            <button>add post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(addNewPostForm)

export default MyPosts;