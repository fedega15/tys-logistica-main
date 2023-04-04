import axios from "axios";

const customAxiosPrivate  = axios.create ( {
    baseURL: 'http://localhost:5000',
    //headers:{ 'Content-Type' : 'application/json'},
    withCredentials: true ,
})
customAxiosPrivate.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401){
        window.location = "/login"
    }
    return Promise.reject(error);
  });
export default customAxiosPrivate