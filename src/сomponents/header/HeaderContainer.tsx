import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {getAuthUserDataTC, logoutTC} from "../../Redux/auth-reducer";

export type MapStatePropsType = {
    login: string | null,
    isAuth: boolean,
    logoutTC?: () => void
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData: getAuthUserDataTC, logoutTC})(HeaderContainer);