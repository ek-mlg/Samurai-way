import React from 'react';
import './App.module.css';
import {Pages} from "./Pages/Pages";
import HeaderContainer from "./сomponents/header/HeaderContainer";
import Sidebar from "./сomponents/sidebar/Sidebar";
import s from './App.module.css'

const App = () => {

    return (
        <div className={s.appWrapper}>
            <HeaderContainer />
            <div className={s.contentContainer}>
                <Sidebar/>
                <Pages/>
            </div>
        </div>

    );
}

export default App;
