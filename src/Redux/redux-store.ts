import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";
import {UsersActionsType, UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = UsersActionsType

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    users: UsersReducer,
    auth: AuthReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
