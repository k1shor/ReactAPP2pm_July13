import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    return <GlobalContext.Provider value={'This is coming from global context.'}>
        {children}
    </GlobalContext.Provider>
}