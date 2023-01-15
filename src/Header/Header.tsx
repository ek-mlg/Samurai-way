import React from 'react';
import s from './Header.module.css';
import Navbar from "../Navbar/Navbar";

/*const headerClassName = `
${s.Header} 
`
const logoClassName = `
${s.Logo}
`*/

export const Header = () => {
    return (
        <header className={s.Header}>
            <img className={s.Logo} src={"https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"}/>
            <Navbar />
        </header>
    );
};
