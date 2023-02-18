import React from 'react';
import {Route, Switch} from "react-router-dom";
import Error404 from "./Error404/Error404";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer"


export const Pages = () => {

    return (
        <Switch>
            <Route path={'/profile/:userId?'}
                   render={() => <ProfileContainer/>}/>
            <Route path={'/messages'}
                   render={() =><MessagesContainer/>}/>
            <Route path={'/users'}
                   render={() =><UsersContainer/>}/>

            {/*<Route path={'/profile'} element={<ProfileContainer />}/>
            <Route path={'/messages'} element={<MessagesContainer/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/users'} element={<UsersContainer/>}/>

            <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
            <Route path={'/messages/:id'} element={<MessagesContainer/>}/>*/}

            <Route path={'/*'}
                   render={() => <Error404/>}/>
        </Switch>
    );
};
