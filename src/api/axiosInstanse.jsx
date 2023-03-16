import axios from "axios";

const config  = axios.create ( {
    baseURL: 'http://webports.duckdns.org:5000',
    withCredentials: true
})

export const customAxios = config