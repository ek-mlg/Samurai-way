import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}