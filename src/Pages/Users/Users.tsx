import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import {UsersType} from "../../Redux/users-reducer";

type PresentationalUsersPropsType = {
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}


const Users:React.FC<PresentationalUsersPropsType> = (props) => {

    const {pageSize, totalUsersCount, currentPage, users, follow, unFollow, onPageChanged} = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div>
                {pages.map(p => {
                    return <span className={`${currentPage === p && s.selectedPage} ${s.pageNumber}`}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} className={s.avatar}/>
                    </div>
                </span>
                <span>
                    {u.followed
                        ? <button onClick={() => {
                            unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
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