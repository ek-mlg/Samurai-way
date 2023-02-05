import React from 'react';
import s from "../Messages.module.css";
import {NavLink, Route, Routes, useParams} from "react-router-dom";

type UserPropsType = {
    name: string,
    id: string

}
const UserItem: React.FC<UserPropsType> = (props) => {

    const {name, id} = props

    const PATH = "/messages/" + id

    return (
            <NavLink
                className={s.item}
                to={PATH}
            >
                {name}
            </NavLink>
    );
};

export default UserItem;