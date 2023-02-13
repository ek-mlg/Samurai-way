import {combineReducers, createStore, legacy_createStore} from "redux";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";
import {StoreType} from "../types";

export type GlobalStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer
});
export const store: StoreType = legacy_createStore(reducers)
