import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "./Error404/Error404";
import MessagesContainer from "./Messages/MessagesContainer";


export const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'/messages'} element={<MessagesContainer/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/messages/:id'}
                   element={<MessagesContainer/>}/>

            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    );
};
