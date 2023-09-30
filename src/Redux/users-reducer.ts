import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppActionsType} from "./redux-store";

export type UsersActionsType =
    ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unFollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof ToggleIsFetchingAC>
    | ReturnType<typeof ToggleIsFollowingProgressAC>


export type UsersType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: PhotosType,
    location: LocationType

}

type PhotosType = {
    small: string,
    large: string
}

type LocationType = {
    country: string,
    city: string
}

export type InitialStateType = typeof initialState

const initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

export const UsersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS': {
            return {
                ...state,
                users: action.users
            }
        }

        case 'SET-CURRENT-PAGE' : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case 'SET-USERS-COUNT' : {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case 'TOGGLE' : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case 'FOLLOWING-PROGRESS' : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;
    }
}

export const followSuccessAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowSuccessAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}

export const SetTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-COUNT",
        totalUsersCount: totalUsersCount
    } as const
}

export const ToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE",
        isFetching: isFetching
    } as const
}

export const ToggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: "FOLLOWING-PROGRESS",
        isFetching: isFetching,
        userId: userId
    } as const
}

export const getUsersThunkCreator = (page: number, pageSize: number) => async (dispatch: Dispatch<AppActionsType>) => {

    dispatch(ToggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))

    const data = await usersAPI.getUsers(page, pageSize)

        dispatch(ToggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(SetTotalUsersCountAC(data.totalCount))
}

export const followThunkCreator = (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {

    dispatch(ToggleIsFollowingProgressAC(true, userId))

    const res = await usersAPI.follow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followSuccessAC(userId))
        dispatch(ToggleIsFollowingProgressAC(false, userId))
    }

}

export const unFollowThunkCreator = (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {

    dispatch(ToggleIsFollowingProgressAC(true, userId))

    const res = await usersAPI.unFollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(unFollowSuccessAC(userId))
        dispatch(ToggleIsFollowingProgressAC(false, userId))
    }
}
