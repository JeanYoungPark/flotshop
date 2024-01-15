import { handleAsyncRequest } from 'api/api'
import axios from 'axios'

export const productListApi = async(id: string) => {
    const res = await handleAsyncRequest(() => axios.post(`/api/admin/product/list`, {id: id}));
    return res.productList;
}