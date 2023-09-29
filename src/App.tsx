import React from 'react';
import './App.module.css';
import {Pages} from "./Pages/Pages";
import HeaderContainer from "./сomponents/header/HeaderContainer";
import Sidebar from "./сomponents/sidebar/Sidebar";
import s from './App.module.css'
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./Redux/auth-reducer";
import {compose} from "redux";

type AppPropsType = {
    getAuthUserData: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <div className={s.contentContainer}>
                    <Sidebar/>
                    <Pages/>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(
    connect(null, {getAuthUserData: getAuthUserDataTC}))
    (App);
