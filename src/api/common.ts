import axios from "axios";
import { handleAsyncRequest } from "./api";

export const categoryApi = async() => {
    const res = await handleAsyncRequest(() => axios.get('/category'));   
    return res;
}

export const subcategoryApi = async() => {
    const res = await handleAsyncRequest(() => axios.get('/subCategory'));   
    return res;
}

export const categoryMenuApi = async() => {
    const res = await handleAsyncRequest(() => axios.get('/categoryMenu'));   
    return res;
}