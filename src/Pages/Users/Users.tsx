import React from 'react';
import {usersPropsType} from "./UsersContainer";
import avatar from "../../assets/images/avatar.png"
import axios, {AxiosResponse} from "axios";
import s from "./Users.module.css"



const Users: React.FC<usersPropsType> = (props) => {

    const {users, follow, unFollow, setUsers} = props
    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: AxiosResponse) => {
                setUsers(response.data.items)
            })
        }
    }

    /*setUsers([
        {id: 1, followed: false, fullName: "Egor", status: 'Boss', location: {country: "Russia", city: "Moscow"}},
        {id: 2, followed: false, fullName: "Masha", status: 'SMM', location: {country: "Russia", city: "Ivanovo"}},
        {id: 3, followed: false, fullName: "Kate", status: 'Medic', location: {country: "Russia", city: "Moscow"}},
        {id: 4, followed: false, fullName: "Misha", status: 'BBQ', location: {country: "Russia", city: "Moscow"}},
    ])*/

    return (
        <>
            <button onClick={getUsers}>getUsers</button>
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