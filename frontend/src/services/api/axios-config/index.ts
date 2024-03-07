import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";
import { error } from "console";

const Api = axios.create({
    baseURL: 'http://localhost/8080'
})

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api};