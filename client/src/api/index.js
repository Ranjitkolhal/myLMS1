import axios from "axios";
// import { BASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";

const API = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});

API.interceptors.request.use((req) => {
    console.log('Request URL:', req.url); // Log the request URL for debugging
    // configure request
    return req;
});


const removeLocalAuth = () => {
    localStorage.removeItem('isAuth')
    console.log('removed')
}

API.interceptors.response.use(
    (response) => {
        // Do something with the response data
        return response;
    },
    (error) => {
        // Do something with the response error
        console.log(error)
        toast.dismiss()
        if (error?.code === 'ERR_NETWORK' || error?.code === 'ERR_BAD_RESPONSE') {
            toast.error('Oops! it seems that the server is not connected')
        }
        if (error?.response?.data?.err?.name === 'TokenMissingError') {
            console.log('Token Missing')
            removeLocalAuth()
            window.location.href = "/signin"
        }
        if (error?.response?.data?.err?.name === "TokenExpiredError" ) {
            console.log('token expired')
            removeLocalAuth()
            window.location.href = '/signin?expired=true';
        }
        return Promise.reject(error);
    }
);

export default API


