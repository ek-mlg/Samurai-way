import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Profile} from "./Profile/Profile";
import Dialogs from "./Components /Dialogs /Dialogs";

function App() {
    return (
        <div className="App-wrapper">
            <Header />
            {/*<Profile />*/}
            <Dialogs />
        </div>
    );
}

export default App;
