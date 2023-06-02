import axios from "axios";

const axiosClient  = (token)=> axios.interceptors.request.use(request => {
    
    const accessToken = localStorage.getItem("token");
  
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    request.headers["Access-Control-Allow-Origin"] = "*";
  
    return request;
})

  export default axiosClient