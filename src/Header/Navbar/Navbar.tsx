import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.Nav}>
            <NavLink
                to={'/profile'}
            >
                Profile
            </NavLink>
            <NavLink
                to={'/messages'}
            >
                Messages
            </NavLink>
            <NavLink
                to={'/news'}
            >
                News
            </NavLink>
            <NavLink
                to={'/music'}
            >
                Music
            </NavLink>
            <NavLink
                to={'/settings'}
            >
                Settings
            </NavLink>
        </nav>
    );
};

export default Navbar;