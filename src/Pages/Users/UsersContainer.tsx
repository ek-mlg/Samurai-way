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
import Users from "./Users";
import axios, {AxiosResponse} from "axios";

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    SetTotalUsersCount: (totalCount: number) => void

}

export type UsersPropsType = InitialStateType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, UsersType> {

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

        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unFollow={this.props.unFollow} follow={this.props.follow} onPageChanged={this.onPageChanged}/>
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);