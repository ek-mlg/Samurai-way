import {combineReducers, createStore, legacy_createStore} from "redux";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";

export type GlobalStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer
});
export const store = legacy_createStore(reducers)
