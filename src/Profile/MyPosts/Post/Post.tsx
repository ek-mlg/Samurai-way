import React from 'react';

type PostType = {
    message: string,
}

const Post:React.FC<PostType> = (props) => {

    const {message} = props

    return (
        <div>
            {message}
        </div>
    );
};

export default Post;