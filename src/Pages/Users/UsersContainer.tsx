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
    UsersType, ToggleIsFetchingAC, ToggleIsFollowingProgressAC
} from "../../Redux/users-reducer";
import Users from "./Users";
import {CircularProgress} from "@material-ui/core";
import {usersAPI} from "../../api/api";

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    SetTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export type UsersPropsType = InitialStateType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, UsersType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.SetTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <div
                style={{position: "absolute", top: "50%", left: "50%"}}
            >
                <CircularProgress/>
            </div> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
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
        toggleIsFetching: ToggleIsFetchingAC,
        toggleFollowingProgress :ToggleIsFollowingProgressAC
    })(UsersContainer);