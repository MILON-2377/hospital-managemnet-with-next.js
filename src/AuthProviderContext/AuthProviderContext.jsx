"use client";

import auth from "@/FirebaseConfig/Firebase.Config";
import useAxiosPublicApi from "@/models/Hooks/useAxiosPublicApi";
import axiosSecure from "@/models/Hooks/useAxiosSecureApi";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext(null);

const AuthProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPubblic = useAxiosPublicApi();
  const [loading, setLaoding] = useState(true);

  // user register handle
  const userRegisterHandle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user log in handle
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  // social login 
  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  }

  // Hj@3hkjk -------------------pass

  // user logged out handle
  const userLoggedOut = () => {
    return signOut(auth);
  };

  // user onAuthStateChanged to is user logged in handle
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);

        // jwt token related api
        const jwtRes = await axiosPubblic.post(
          `/jwt?email=${currentUser.email}`,
          { withCredentials: true }
        );
        // console.log(jwtRes.data);

        try {
          // users data loading api
          const userRes = await axios.get(
            `/api/users?email=${currentUser.email}`
          );

          if (userRes.data.userData) {
            setUser(userRes?.data?.userData);
            setLaoding(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const jwtRes = await axiosPubblic.post(`/jwt?email=${false}`, {
          withCredentials: true,
        });
        // console.log(jwtRes.data);
        setUser(null);
        setLaoding(false);
      }
    });

    return () => unSubScribe();
  }, []);

  // user auth info
  const authInfo = {
    userRegisterHandle,
    userLoggedOut,
    userLogIn,
    user,
    loading,
    googleLogIn
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export default AuthProviderContext;
