import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const categoryListApi = async() => {
    const res = await handleAsyncRequest(() => axios.post('/api/category'));
    return res.category;
}

export const subCategoryListApi = async(categoryId?: number) => {
    if(categoryId){
        const res = await handleAsyncRequest(() => axios.post(`/api/category/${categoryId}/detail`));
        return res.categoryDetail;
    }
}

export const categoryInfoApi = async(categoryId?: number) => {
    if(categoryId){
        const res = await handleAsyncRequest(() => axios.post(`/api/category/info/${categoryId}`));
        return res;
    }
}