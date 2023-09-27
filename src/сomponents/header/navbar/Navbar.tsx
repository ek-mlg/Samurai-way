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
                to={'/messages'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                Messages
            </NavLink>
            <NavLink
                to={'/news'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                News
            </NavLink>
            <NavLink
                to={'/music'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                Music
            </NavLink>
            <NavLink
                to={'/settings'}
                className={({isActive}) => isActive ? s.active : ''}
            >
                Settings
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