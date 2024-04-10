import axios from "axios";

const http = axios.create({
    //通用请求的地址
    baseURL: '/api',
    timeout:10000,//超时时间
})
http.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
http.interceptors.request.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});
export default http