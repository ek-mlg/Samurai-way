import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionsType, ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";
import {UsersActionsType, UsersReducer} from "./users-reducer";
import {AuthActionsType, AuthReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = UsersActionsType | ProfileActionsType | AuthActionsType

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    users: UsersReducer,
    auth: AuthReducer,
    form: formReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
