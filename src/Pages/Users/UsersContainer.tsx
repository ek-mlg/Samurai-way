import React from 'react';
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC,
    SetTotalUsersCountAC,
    unFollowAC,
    UsersType, ToggleIsFetchingAC
} from "../../Redux/users-reducer";
import Users from "./Users";
import axios, {AxiosResponse} from "axios";
import {CircularProgress} from "@material-ui/core";

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    SetTotalUsersCount: (totalCount: number) => void,
    ToggleIsFetching: (isFetching: boolean) => void

}

export type UsersPropsType = InitialStateType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, UsersType> {

    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then((response: AxiosResponse) => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.ToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
            .then((response: AxiosResponse) => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <div
                style={{position: "absolute", top: "50%", left: "50%"}}
            >
                <CircularProgress />
            </div> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

export default connect(
    mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        SetTotalUsersCount: SetTotalUsersCountAC,
        ToggleIsFetching: ToggleIsFetchingAC
    })(UsersContainer);