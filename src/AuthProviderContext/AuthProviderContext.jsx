"use client";

import auth from '@/FirebaseConfig/Firebase.Config';
import useAxiosSecureApi from '@/models/Hooks/useAxiosSecureApi';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';


export const authContext = createContext(null);

const AuthProviderContext = ({children}) => {

    const [user, setUser] = useState(null);
    const axiosSecureApi = useAxiosSecureApi();

    // user register handle 
    const userRegisterHandle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 



    // user logged out handle
    const userLoggedOut = () =>{
        return signOut(auth);
    }



    // user onAuthStateChanged to is user logged in handle
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, async(currentUser) =>{
            if(currentUser){
                console.log(currentUser);

                try {
                    
                } catch (error) {
                    console.log(error);
                }

            }else{
                setUser(null);
            }
        });


        return () => unSubScribe();
    },[]);


    // user auth info
    const authInfo = {userRegisterHandle,userLoggedOut}

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