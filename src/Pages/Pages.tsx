import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "./Error404/Error404";
import {store} from "../Redux/state";
import MessagesContainer from "./Messages/MessagesContainer";


export const Pages = () => {

    /*const state = props.store.getState()

    const messagesPageData = state.messagesPage
    const dispatch = props.store.dispatch.bind(props.store)*/

    // const params = useParams<'id'>()

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'/messages'} element={<MessagesContainer store={store}/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/messages/:id'}
                   element={<MessagesContainer store={store}/>}/>

            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    );
};
