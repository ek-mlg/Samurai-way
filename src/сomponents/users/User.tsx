import React from 'react';
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import {UsersType} from "../../Redux/users-reducer";

type UserPropsType = {
    user: UsersType,
    followingInProgress: number[],
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,

}
const User: React.FC<UserPropsType> = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : avatar} style={{width: '20px'}} alt="photo"/>
            </NavLink>
        </div>
        <span>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id)

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}


                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
        <span>
                    <span>
                        <div>{/*{u.location.country}*/}</div>
                        <div>{/*{u.location.city}*/}</div>
                    </span>
                </span>
        </>

)
    ;
};

export default User;