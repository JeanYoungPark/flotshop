import axios from "axios";
import { handleAsyncRequest } from "./api";

export const productApi = async(category_id?: string) => {
    const res = await handleAsyncRequest(() => axios.post('/product', {category_id: category_id}));
    return res;
}