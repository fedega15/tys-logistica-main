import axios from "axios";

const config  = axios.create ( {
    baseURL: 'http://localhost:5000',
   // withCredentials: true 
})

export const customAxios = config