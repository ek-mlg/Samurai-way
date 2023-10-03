import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {ProfileActionsType, ProfilePageReducer} from "./profilePage-reducer";
import {MessagesPageReducer} from "./messagesPage-reducer";
import {UsersActionsType, UsersReducer} from "./users-reducer";
import {AuthActionsType, AuthReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {FormAction, reducer as formReducer} from 'redux-form'
import {AppReducer} from "./app-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = UsersActionsType | ProfileActionsType | AuthActionsType | FormAction

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    users: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ || compose

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType | Promise<ReturnType>, AppRootStateType, unknown, AppActionsType>
