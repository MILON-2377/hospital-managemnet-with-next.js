const { default: axios } = require("axios");

const axiosSecure = axios.create({
    baseURL:"/api/"
})

const useAxiosPublicApi = () => {
    return axiosSecure;
}

export default useAxiosPublicApi;