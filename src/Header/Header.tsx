import React from 'react';
import s from './Header.module.css';
import Navbar from "./Navbar/Navbar";
import {MemoryRouter, NavLink} from "react-router-dom";
import {MapStatePropsType} from "./HeaderContainer";

/*const headerClassName = `
${s.Header} 
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
                            <NavLink to={"/Login"}>Login</NavLink>
                        }
                    </div>
                </div>
            </header>
        </>
    );
};
