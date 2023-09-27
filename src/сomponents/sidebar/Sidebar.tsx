import React from 'react';
import Navbar from "../header/navbar/Navbar";
import s from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
        </div>
    );
};

export default Sidebar;