import React from 'react';

type PostPropsType = {
    message: string,
    likeCounter: number
}

const Post: React.FC<PostPropsType> = (props) => {

    const {message, likeCounter} = props

    return (
        <>
            <div>
                {message}
            </div>
            <div>
                {likeCounter}
            </div>
        </>
    );
};

export default Post;