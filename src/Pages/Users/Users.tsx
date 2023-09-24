import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

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

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={s.users}>
                {pages.map(p => {
                    return <span className={`${currentPage === p && s.selectedPage} ${s.pageNumber}`}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : avatar} className={s.avatar} alt="photo"/>
                    </NavLink>
                </div>
                <span>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            unFollow(u.id)

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id)
                        }}>Follow</button>}


                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <span>
                        <div>{/*{u.location.country}*/}</div>
                        <div>{/*{u.location.city}*/}</div>
                    </span>
                </span>
            </div>)}
        </>
    );
};

export default Users;