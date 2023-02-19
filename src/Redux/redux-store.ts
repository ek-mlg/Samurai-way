import {combineReducers, legacy_createStore} from "redux";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    users: UsersReducer,
    auth: AuthReducer
});
export const store = legacy_createStore(rootReducer)
