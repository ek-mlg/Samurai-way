import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../Redux/users-reducer";
import Pagination from "../pagination/Pagination";
import User from "./User";

type PresentationalUsersPropsType = {
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    followingInProgress: number[]
}

const Users: React.FC<PresentationalUsersPropsType> = (props) => {

    const {
        pageSize,
        totalUsersCount,
        currentPage,
        users,
        follow,
        unFollow,
        onPageChanged,
        followingInProgress
    } = props

    return (
        <div className={s.usersBlock}>
            <Pagination pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
            {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} unFollow={unFollow} follow={follow}/>)}
        </div>
    );
};

export default Users;