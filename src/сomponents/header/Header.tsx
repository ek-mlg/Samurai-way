import React from 'react';
import s from './Header.module.css';
import Navbar from "./navbar/Navbar";
import {MemoryRouter, NavLink} from "react-router-dom";
import {MapStatePropsType} from "./HeaderContainer";

/*const headerClassName = `
${s.header}
`
const logoClassName = `
${s.Logo}
`*/

export const Header = (props: MapStatePropsType) => {

    return (
        <>
            <header className={s.header}>
                <div className={s.headerContainer}>
                    <h2 className={s.title}>Social Network</h2>
                    <div className={s.login}>
                        {props.isAuth ? props.login
                            :
                            <NavLink to={"/login"}>Login</NavLink>
                        }
                    </div>
                </div>
            </header>
        </>
    );
};
