import React from 'react';
import './App.module.css';
import {Pages} from "./Pages/Pages";
import HeaderContainer from "./сomponents/header/HeaderContainer";
import Sidebar from "./сomponents/sidebar/Sidebar";
import s from './App.module.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {AppRootStateType} from "./Redux/redux-store";
import Preloader from "./сomponents/preloader/Preloader";

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
        return <Preloader/>
        }

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

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp: initializeAppTC}))
    (App);
