import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const adminListApi = async() => {
    const res = await handleAsyncRequest(() => axios.post('/api/admin/user/list'));
    return res.users;
}

export const adminDeleteApi = async(id: string) => {
    // api 작업 필요
    const res = await handleAsyncRequest(() => axios.delete('/api/user/delete'));
    return res;
}

export const adminModifyApi = async(data: {id?: string, user_id: string, password: string, name: string, email: string, newPassword: string}) => {
    const res = await handleAsyncRequest(() => axios.post('/api/user/update', data));
    console.log(res);
    return res;
}

export const adminGetApi = async(id?: string) => {
    const res = await handleAsyncRequest(() => axios.post('/api/find/user', {id: id}));
    return res.user;
}