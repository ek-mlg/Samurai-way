import React, {useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

/*const headerClassName = `
${s.header}
`
const logoClassName = `
${s.Logo}
`*/

export const Header = (props: any) => {

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
                    <h2 className={s.title}>Social Network</h2>
                    <div className={`${s.login} ${openMenu ? s.active : ''}`} onClick={onClickHandlerOpenCloseMenu}>
                        {openMenu ? <div className={s.menu}>
                            <span className={s.logout} onClick={props.logoutTC}>Logout</span>
                        </div> : ''}
                        {props.isAuth
                            ? props.login
                            : <NavLink to={"/login"}>Login</NavLink>}
                    </div>
                </div>
            </header>
        </>
    );
};
