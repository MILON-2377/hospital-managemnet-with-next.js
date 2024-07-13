import axios from 'axios'
import React from 'react'

const axiosSecure = axios.create({
  baseURL:"/api/",
})

export default function useAxiosSecureApi() {
  return axiosSecure;
}
