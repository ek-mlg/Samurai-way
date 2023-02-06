import {combineReducers, createStore} from "redux";
import {ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";

export type GlobalStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer
});
export const store = createStore(reducers)