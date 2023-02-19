import React from 'react';
import {Header} from "./Header";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {setUserDataAC} from "../Redux/auth-reducer";

export type MapStatePropsType = {
    login: string | null
    isAuth: boolean,
}

type MapDispatchPropsType = {
    setUserDataAC: (id: number, email: string, login: string) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: AxiosResponse) => {
                const {id, login, email} = response.data.data
                if (response.data.resultCode === 0) {
                    this.props.setUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);