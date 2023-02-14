export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

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
                    users: [...state.users, ...action.users]
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