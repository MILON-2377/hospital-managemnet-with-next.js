"use client";

import auth from '@/FirebaseConfig/Firebase.Config';
import useAxiosPublicApi from '@/models/Hooks/useAxiosPublicApi';
import useAxiosSecureApi from '@/models/Hooks/useAxiosSecureApi';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';


export const authContext = createContext(null);

const AuthProviderContext = ({children}) => {

    const [user, setUser] = useState(null);
    const axiosSecureApi = useAxiosSecureApi();
    const axiosPubblic = useAxiosPublicApi();
    

    // user register handle 
    const userRegisterHandle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 


    // user log in handle
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Hj@3hkjk -------------------pass

    // user logged out handle
    const userLoggedOut = () =>{
        return signOut(auth);
    }



    // user onAuthStateChanged to is user logged in handle
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, async(currentUser) =>{
            if(currentUser){
                // console.log(currentUser);

                // jwt token related api
                const jwtRes = await axiosPubblic.post(`/jwt?email=${currentUser.email}`,{withCredentials:true});
                console.log(jwtRes.data);


                // users data loading api
                const userRes = await axiosSecureApi.get(`/users?email=${currentUser.email}`);
                console.log(userRes.data);

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
    const authInfo = {userRegisterHandle,userLoggedOut,userLogIn}

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