import { handleAsyncRequest } from 'api/api'
import axios from 'axios'

export const productListApi = async(id: number) => {
    const res = await handleAsyncRequest(() => axios.post(`/api/admin/product/list`, {id: id}));
    return res.productList;
}