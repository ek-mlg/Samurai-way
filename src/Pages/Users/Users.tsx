import React from 'react';
import {usersPropsType} from "./UsersContainer";


const Users: React.FC<usersPropsType> = (props) => {

    const {users, follow, unFollow, setUsers} = props

    /*setUsers([
        {id: 1, followed: false, fullName: "Egor", status: 'Boss', location: {country: "Russia", city: "Moscow"}},
        {id: 2, followed: false, fullName: "Masha", status: 'SMM', location: {country: "Russia", city: "Ivanovo"}},
        {id: 3, followed: false, fullName: "Kate", status: 'Medic', location: {country: "Russia", city: "Moscow"}},
        {id: 4, followed: false, fullName: "Misha", status: 'BBQ', location: {country: "Russia", city: "Moscow"}},
    ])*/

    return (
        <>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </>
    );
};

export default Users;