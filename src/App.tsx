import React from 'react';
import './App.css';
import {Pages} from "./Pages/Pages";
import HeaderContainer from "./Header/HeaderContainer";
import Sidebar from "./Sidebar/Sidebar";


const App = () => {

    return (
        <div className="App-wrapper">
            <HeaderContainer />
            <Sidebar/>
            <Pages/>
        </div>

    );
}

export default App;
