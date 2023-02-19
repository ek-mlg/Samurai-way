export type authActionsType =
    ReturnType<typeof setUserDataAC>

export type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: InitialStateType = initialState, action: authActionsType): InitialStateType => {

    switch (action.type) {

        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setUserDataAC = (id: number | null,
                              email: string | null,
                              login: string | null,) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            email,
            login
        }
    } as const
}