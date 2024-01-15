import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const loginApi = async(userId: string, password: string) => {
    const res = await handleAsyncRequest(() => axios.post('/api/admin/login', {user_id: userId, password: password}));
    return res;
}