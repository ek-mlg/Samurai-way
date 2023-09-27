import React from 'react';
import {Navigate, Route, Routes}  from "react-router-dom";
import News from "../сomponents/news/News";
import Music from "../сomponents/music/Music";
import Settings from "../сomponents/settings/Settings";
import Error404 from "../сomponents/error404/Error404";
import MessagesContainer from "../сomponents/messages/MessagesContainer";
import Login from "../сomponents/login/Login";
import UsersContainer from "../сomponents/users/UsersContainer";
import ProfileContainer from "../сomponents/profile/ProfileContainer"

export const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

            <Route path={'/messages'}  element={<MessagesContainer />}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/users'} element={<UsersContainer />}/>
            <Route path={'login'} element={<Login />}/>

            <Route path={'/profile/:userId?'} element={<ProfileContainer />}/>
            <Route path={'/messages/:id'} element={<MessagesContainer/>}/>

            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    );
};
