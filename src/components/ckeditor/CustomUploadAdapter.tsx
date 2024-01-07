import { FileLoader } from "@ckeditor/ckeditor5-upload";
import axios from "axios";

export class CustomUploadAdapter {
    constructor(private loader: FileLoader) {
        this.loader = loader;
    }
    
    upload() {
        return new Promise((resolve, reject) => {
            this.loader.file.then(async (file: any) => {
                const data = new FormData();
                data.append("data", file);

                // 데이터를 서버로 전송하는 부분을 여기에 작성해야 합니다.
                const response = await axios.post("http://localhost:3001/api/board/upload/temp", data, {
                    headers: {'Content-type': 'multipart/form-data'}
                });
                
                // 아래 코드는 Blob URL을 생성하며 이를 사용하여 이미지를 삽입합니다.
                resolve({ default: `http://localhost:3001${response.data.result.img_path}/${response.data.result.image_hash}` });
            });
        });
    }
    
    abort() {
        // 파일 전송이 중단될 때 처리하는 로직을 작성해야 합니다.
    }
}