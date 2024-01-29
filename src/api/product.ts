import axios from "axios";
import { handleAsyncRequest } from "./api";

export const productApi = async(product_id?: string) => {
    const res = await handleAsyncRequest(() => axios.post('/product', {product_id: product_id}));
    return res;
}

export const productListApi = async(category_id?: string, sub_category_id?: string) => {
    const res = await handleAsyncRequest(() => axios.post('/product/list', {category_id: category_id, sub_category_id: sub_category_id}));
    return res;
}