import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import News from "../сomponents/news/News";
import Music from "../сomponents/music/Music";
import Settings from "../сomponents/settings/Settings";

import Preloader from "../сomponents/preloader/Preloader";

const ProfileContainerLazy = React.lazy(() => import('../сomponents/profile/ProfileContainer'))
const MessagesContainerLazy = React.lazy(() => import('../сomponents/messages/MessagesContainer'))
const UsersContainerLazy = React.lazy(() => import('../сomponents/users/UsersContainer'))
const LoginLazy = React.lazy(() => import('../сomponents/login/Login'))
const Error404Lazy = React.lazy(() => import('../сomponents/error404/Error404'))

export const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>

            <Route path={'/users'} element={
                <Suspense fallback={<Preloader/>}>
                <UsersContainerLazy/>
                </Suspense>
            }/>

            <Route path={'login'} element={
                <Suspense fallback={<Preloader/>}>
                    <LoginLazy/>
                </Suspense>
            }/>

            <Route path={'/profile/:userId?'} element={
                <Suspense fallback={<Preloader/>}>
                    <ProfileContainerLazy/>
                </Suspense>
            }/>

            <Route path={'/messages'} element={
                <Suspense fallback={<Preloader/>}>
                    <MessagesContainerLazy/>
                </Suspense>
            }/>

            <Route path={'/messages/:id'} element={
                <Suspense fallback={<Preloader/>}>
                    <MessagesContainerLazy/>
                </Suspense>
            }/>

            <Route path={'/*'} element={
                <Suspense fallback={<Preloader/>}>
                <Error404Lazy/>
                </Suspense>
                }/>
        </Routes>
    );
};
