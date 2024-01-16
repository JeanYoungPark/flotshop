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

export const categoryAddApi = async(categoryValue: string) => {
    const res = await handleAsyncRequest(() => axios.post('/api/category/add', {title: categoryValue}));
    return res.result;
}

export const subCategoryAddApi = async(categoryId?: number, value?: string) => {
    const res = await handleAsyncRequest(() => axios.post(`/api/category/${categoryId}/detail/add`, {title: value}));
    return res;
}

export const categoryDeleteApi = async(id: number) => {
    const res = await handleAsyncRequest(() => axios.post(`/api/category/${id}/detail`));
    return res;
}