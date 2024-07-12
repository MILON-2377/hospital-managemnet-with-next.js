"use client";

import React, { createContext, useContext } from 'react';


export const authContext = createContext(null);

const AuthProviderContext = ({children}) => {



    const authInfo = {name:"milon"}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

export default AuthProviderContext;