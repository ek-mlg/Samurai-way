import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.Nav}>
            <NavLink
                to={'/profile'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                Profile
            </NavLink>
            <NavLink
                to={'/users'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                Users
            </NavLink>
        </nav>
    );
};

export default Navbar;