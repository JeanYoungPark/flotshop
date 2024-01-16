import { handleAsyncRequest } from 'api/api'
import axios from 'axios'

export const productListApi = async(id: number) => {
    const res = await handleAsyncRequest(() => axios.post(`/api/admin/product/list`, {id: id}));
    return res.productList;
}

export const productAddApi = async(data: {category_id?: number, name: string, price:string, option_id?: number, description: string}) => {
    const res = await handleAsyncRequest(() => axios.post('/api/admin/product/add', data));
    return res;
}