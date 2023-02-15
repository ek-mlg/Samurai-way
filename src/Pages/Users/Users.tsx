import React from "react";
import avatar from "../../assets/images/avatar.png";
import s from "./Users.module.css";
import axios, {AxiosResponse} from "axios";
import {UsersType} from "../../Redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import {match} from "assert";

export class Users extends React.Component<UsersPropsType, UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div>
                    {pages.map(p => {
                        return <span className={`${this.props.currentPage === p && s.selectedPage} ${s.pageNumber}`}
                                     onClick={() => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })}

                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} className={s.avatar}/>
                    </div>
                </span>
                    <span>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
    }
}