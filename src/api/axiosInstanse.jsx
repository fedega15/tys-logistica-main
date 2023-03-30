import axios from "axios";

export default customAxios  = axios.create ( {
    baseURL: 'http://localhost:5000',
   // withCredentials: true 
})
export const customAxiosPrivate  = axios.create ( {
    baseURL: 'http://localhost:5000',
    headers:{ 'Content-Type' : 'application/json'},
    withCredentials: true ,
})

