import React from "react";
import avatar from "../../assets/images/avatar.png";
import s from "./Users.module.css";
import axios, {AxiosResponse} from "axios";
import {UsersType} from "../../Redux/users-reducer";
import {usersPropsType} from "./UsersContainer";

export class Users extends React.Component<usersPropsType, UsersType> {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: AxiosResponse) => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return (
            <>
                <button onClick={this.getUsers}>getUsers</button>
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