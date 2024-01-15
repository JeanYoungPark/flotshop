import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const loginApi = async(userId: string, password: string) => {
    const res = await handleAsyncRequest(() => axios.post('/api/admin/login', {user_id: userId, password: password}));
    return res;
}

export const checkUserApi = async(userId: string) => {
    const res = await handleAsyncRequest(() => axios.post('/api/find/user', {user_id: userId}));
    console.log(res);
    return res.data;
}

export const joinApi = async(data: {user_id: string, password: string, name: string, email: string}) => {
    const res = await handleAsyncRequest(() => axios.post('/api/admin/user/join', data));
    console.log(res);
    return res;
}