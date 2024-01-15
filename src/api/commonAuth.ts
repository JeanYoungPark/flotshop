import axios from "axios";
import { handleAsyncRequest } from "./api";

export const logoutApi = async(userId: string | null) => {
    if(userId){
        const res = await handleAsyncRequest(() => axios.post('/api/common/logout', {id: userId}));   
        return res;
    }
    
    return false;
}