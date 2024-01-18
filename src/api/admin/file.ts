import { handleAsyncRequest } from "api/api";
import axios from "axios";

export const productImageUploadApi = async(formData: FormData) => {
    const res = await handleAsyncRequest(() => axios.post("/api/admin/product/upload", formData, {
        headers: {'Content-type': 'multipart/form-data'}
    }));

    return res;
}

export const boardImageUploadApi = async(images: string[]) => {
    const res = await handleAsyncRequest(() => axios.post('/api/board/upload', images));
    return res;
}