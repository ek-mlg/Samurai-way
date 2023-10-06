import React, {useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null,
    isAuth: boolean,
    logoutTC?: () => void
}

export const Header = (props: HeaderPropsType) => {

    const [openMenu, setOpenMenu] = useState(false)

    const onClickHandlerOpenCloseMenu = () => {
        if (props.isAuth) {
            setOpenMenu(!openMenu)
        }
    }

    return (
        <>
            <header className={s.header}>
                <div className={s.headerContainer}>
                    <h2 className={s.title}>Samurai Way</h2>
                    <div
                        className={`${s.loginContainer} ${openMenu ? s.loginContainerActive : ''}`}
                        onClick={onClickHandlerOpenCloseMenu}>
                        {openMenu ? <div className={s.menu}>
                            <span className={s.logout} onClick={props.logoutTC}>Logout</span>
                        </div> : ''}
                        {props.isAuth
                            ? props.login
                            : <NavLink to={"/login"} className={s.login}>Login</NavLink>}
                    </div>
                </div>
            </header>
        </>
    );
};
