import React from 'react';
import s from './Navbar.module.css';

/*const navClassName = `
${s.Nav}
`
const itemClassName = `
${s.Item}
`*/

const Navbar = () => {
    return (
        <nav className={s.Nav}>
            <div className={s.Item}>Profile</div>
            <div className={s.Item}>Messages</div>
            <div className={s.Item}>News</div>
            <div className={s.Item}>Music</div>
            <div className={s.Item}>Settings</div>
        </nav>
    );
};

export default Navbar;