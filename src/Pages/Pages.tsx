import React from 'react';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Error404 from "./Error404/Error404";
import {store} from "../Redux/state";
import {StoreType} from "../types";

type PagesPropsType = {
    store: StoreType
}

export const Pages: React.FC<PagesPropsType> = (props) => {

    const state = props.store.getState()

    const messagesPageData = state.messagesPage
    const dispatch = props.store.dispatch.bind(props.store)

    const params = useParams<'id'>()

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

            <Route path={'/profile'} element={<Profile store={store}/>}/>
            <Route path={'/messages'} element={<Messages dispatch={dispatch} messagesPageData={messagesPageData}/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/messages/:id'}
                   element={<Messages dispatch={dispatch} messagesPageData={messagesPageData}/>}/>

            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    );
};