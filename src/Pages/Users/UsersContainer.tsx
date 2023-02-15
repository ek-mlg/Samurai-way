import React from 'react';
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC,
    SetTotalUsersCountAC,
    unFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    SetTotalUsersCount: (totalCount: number) => void

}

export type UsersPropsType = InitialStateType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        SetTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;