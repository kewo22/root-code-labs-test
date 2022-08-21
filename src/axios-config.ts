import axios from "axios";

const BASE_URL = 'https://mock-server-rtc.herokuapp.com/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});
export default axiosInstance;
