import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post message={'hi'}/>
            <Post message={'its my firs post'}/>
        </div>
    );
};

export default MyPosts;