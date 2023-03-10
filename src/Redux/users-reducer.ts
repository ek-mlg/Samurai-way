export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
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

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowAC = (userId: number) => {
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
