import React from 'react';

type PostPropsType = {
    message: string,
    likeCounter: number
}

const Post: React.FC<PostPropsType> = (props) => {

    const {message, likeCounter} = props

    return (
        <>
            <img alt={'main photo'}/>
            <div>
                {message}
            </div>
            <div>
                <span>like: </span>
                {likeCounter}
            </div>
        </>
    );
};

export default Post;