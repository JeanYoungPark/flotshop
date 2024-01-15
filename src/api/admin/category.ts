import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const categoryListApi = async() => {
    const res = await handleAsyncRequest(() => axios.post('/api/category'));
    return res.category;
}