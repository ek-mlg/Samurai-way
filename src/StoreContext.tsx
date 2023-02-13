import React from "react";
import {StoreType} from "./types";


type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}
export const StoreContext = React.createContext({} as StoreType)

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}