"use client";

import auth from "@/FirebaseConfig/Firebase.Config";
import axiosPublic from "@/Hooks/useAxiosPublic";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import axiosSecure from "@/Hooks/userAxiosSecure";

export const authContext = createContext(null);

const AuthProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLaoding] = useState(true);
  const router = useRouter();

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
    return signInWithPopup(auth, googleProvider);
  };

  // user logged out handle
  const userLoggedOut = () => {
    return signOut(auth);
  };

  // password update
  const userPasswordUpdate = (newPass) => {
    const user = auth.currentUser;
    return updatePassword(user, newPass);
  };

  // user onAuthStateChanged to is user logged in handle
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        try {
          // jwt token related api
          const jwtRes = await axiosPublic.post(
            `/jwt?email=${currentUser.email}`,
            { withCredentials: true }
          );

          // users data loading api
          if (jwtRes) {
            const userRes = await axiosSecure.get(
              `/users?email=${currentUser.email}`
            );

            if (userRes.data.userData) {
              setUser(userRes?.data?.userData);
              setLaoding(false);
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setUser(null);
        setLaoding(false);
      }
    });

    return () => unSubScribe();
  }, []);

  useEffect(() => {
    if (user === null) {
      (async () => {
        try {
          await axiosPublic.post("/jwt", {});
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [user]);

  // user auth info
  const authInfo = {
    userRegisterHandle,
    userLoggedOut,
    userLogIn,
    user,
    loading,
    googleLogIn,
    userPasswordUpdate,
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
