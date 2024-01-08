import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        if (!config.headers.common) {
            config.headers.common = {};
        }

        config.baseURL = "http://localhost:3001";
        return config;
    },
    (error) => {
        // request 인터셉터 에러 처리 로직 작성
        return Promise.reject(error);
    }
);

/* try catch 통합 */
export const handleAsyncRequest = async (asyncFunction: any) => {
    try {
        const response = await asyncFunction();
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};