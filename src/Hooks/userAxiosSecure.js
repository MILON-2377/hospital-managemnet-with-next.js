"use client";
import axios from 'axios'
import Cookies from "js-cookie";


const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_api,
  withCredentials:true,
})


// request interceptors
  axiosSecure.interceptors.request.use((config) => {
    const token = Cookies.get("token");

    if(token){
      config.headers["Authroization"] = `Bearer ${token}`;
    }

    return config;

  }, (error) => {
    return Promise.reject(error);
  });


  // response interceptor
  axiosSecure.interceptors.response.use((res) => {
    return res;
  }, (error) => {
    if(error.response && error.response.status === 401){
      window.location.href = "/login";
    }

    return Promise.reject(error);
  })
  
export default axiosSecure
 
