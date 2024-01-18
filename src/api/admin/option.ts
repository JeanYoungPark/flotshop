import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const optionListApi = async() => {
    const res = await handleAsyncRequest(() => axios.post('/api/option'));
    return res.option;
}

export const subOptionListApi = async(id?: number) => {
    if(id){
        const res = await handleAsyncRequest(() => axios.post(`/api/option/${id}/detail`));
        return res.optionDetail;
    }
}