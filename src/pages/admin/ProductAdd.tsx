import React, {useCallback, useEffect, SyntheticEvent, Fragment, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { handleAsyncRequest } from 'api/api'
import { ProductForm } from 'components/product/ProductForm'


type categoryType = {
    id: number | undefined,
    title: string | undefined
}

type categoryListType = {
    id: number | undefined,
    title: string | undefined
}

export const ProductAdd = () => {
    const { category_id, id } = useParams();
    // 선택된 큰 카테고리
    const [selectedCategory, setSelectedCategory] = useState<categoryType>({id: undefined, title: undefined});

    const [selectedCategoryDetail, setSelectedCategoryDetail] = useState<categoryListType>({id: undefined, title: undefined});
    const [selectedOption, setSelectedOption] = useState<categoryListType>({id: undefined, title: undefined});
    const [categoryDetailList, setCategoryDetailList] = useState<categoryListType[]>([]);
    const [optionList, setOptionList] = useState<categoryListType[]>([]);
    const [optionDetailList, setOptionDetailList] = useState<categoryListType[]>([]);
    const [productName, setProductName] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');
    const [productDiscount, setProductDiscount] = useState<string>('0');
    const [files, setFiles] = useState<File[]>([]);
    const [prevImg, setPrevImg] = useState<string[]>([]);
    const [productDes, setProductDes] = useState<string | undefined>(undefined);
    
    const onChangeFiles = useCallback((e: any) => {
        const newFiles = e.target.files;
        const FileList = [];
        const urlList = [];

        for(let i = 0; i < newFiles.length; i++) {
            FileList.push(newFiles[i]);
            urlList.push(URL.createObjectURL(newFiles[i]));
        }
        
        setFiles(FileList);
        setPrevImg(urlList);
    }, []);

    const handleFile = useCallback(async () => {
        const formData = new FormData();
        if(selectedCategoryDetail.id){
            formData.append('categoryId', selectedCategoryDetail.id.toString());
    
            for(let file of files){
                formData.append('data', file);
            }
    
            await handleAsyncRequest(() => axios.post("/api/admin/product/upload", formData, {
                headers: {'Content-type': 'multipart/form-data'}
            }));
        }
    }, [files, selectedCategoryDetail]);
    
    const handleImage = useCallback(async(imgs: string[]) => {
        const res = await handleAsyncRequest(() => axios.post('/api/board/upload', imgs));
    }, []);



    const optionListApi = useCallback(async() => {
        const res = await handleAsyncRequest(() => axios.post('/api/option'));
        setOptionList([...res.option]);
    }, []);

    /**
     * 서브 옵션 리스트 호출
     */
    const optionDetailListApi = useCallback(async(id: number | undefined) => {
        const res = await handleAsyncRequest(() => axios.post(`/api/option/${id}/detail`));
        setOptionDetailList([...res.optionDetail]);
    }, []);
    
    const onSubmit = useCallback(async (e:SyntheticEvent) => {
        e.preventDefault();
        const matches = [];
        
        if(!selectedCategory){
            alert('카테고리를 선택해주세요.');
            return false;
        }

        if(!selectedCategoryDetail){
            alert('세부 카테고리를 선택해주세요.');
            return false;
        }
        
        if(!productName){
            alert('상품 이름을 입력해주세요.');
            return false;
        }

        if(!productPrice){
            alert('상품 가격을 입력해주세요.');
            return false;
        }

        if(!productDes){
            alert('상품 설명을 입력해주세요.');
            return false;
        }else{
            const regex = /data-id="(\d+)"/g;
            let match;

            while ((match = regex.exec(productDes)) !== null) {
                matches.push(match[1]);
            }
        }

        const data = {
            category_id: selectedCategoryDetail.id,
            name: productName,
            price: productPrice,
            option_id: selectedOption.id,
            description: productDes
        }

        const res = await handleAsyncRequest(() => axios.post('/api/admin/product/add', data));
        handleFile();
        handleImage(matches);

        // 상품 상세로 이동


    }, [handleFile, handleImage, productDes, productName, productPrice, selectedCategory, selectedCategoryDetail, selectedOption.id]);
    
    useEffect(() => {
        categoryListApi();
        optionListApi();

        if(category_id){

        }
    }, [categoryListApi, optionListApi]);
    
    return (
        <div className='pt-10 pb-10 flex w-full h-full justify-center items-center'>
            <ProductForm />
        </div>
    )
}
