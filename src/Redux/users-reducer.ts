export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

export type UsersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type LocationType = {
    country: string,
    city: string
}

export type InitialStateType = typeof initialState

const initialState = {
    users: [
        {id: 1, followed: false, fullName: "Egor", status: 'Boss', location: {country: "Russia", city: "Moscow"}},
        {id: 2, followed: false, fullName: "Masha", status: 'SMM', location: {country: "Russia", city: "Ivanovo"}},
        {id: 3, followed: false, fullName: "Kate", status: 'Medic', location: {country: "Russia", city: "Moscow"}},
        {id: 4, followed: false, fullName: "Misha", status: 'BBQ', location: {country: "Russia", city: "Moscow"}},
    ] as UsersType[],
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

        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
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