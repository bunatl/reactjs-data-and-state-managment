import React, { createContext, FC } from 'react'

export const GlobalContext = createContext({});

export const ContextProvider: FC = ({ children }) => {

    return (
        <GlobalContext.Provider value={''}>
            {children}
        </GlobalContext.Provider>
    )
}