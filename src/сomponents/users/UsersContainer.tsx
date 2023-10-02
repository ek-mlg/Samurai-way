import React from 'react';
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    InitialStateType,
    setCurrentPageAC,
    UsersType,
    ToggleIsFollowingProgressAC,
    getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import {CircularProgress} from "@material-ui/core";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";


type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void;
}

export type UsersPropsType = InitialStateType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, UsersType> {


    componentDidMount() {
        const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize}= this.props
        this.props.getUsers(pageNumber, pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            follow: followThunkCreator,
            unFollow: unFollowThunkCreator,
            setCurrentPage: setCurrentPageAC,
            toggleFollowingProgress: ToggleIsFollowingProgressAC,
            getUsers: getUsersThunkCreator
        })
)(UsersContainer)