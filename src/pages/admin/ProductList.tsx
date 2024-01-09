import axios from 'axios'
import React, {useEffect, useState, useCallback} from 'react'
import { useNavigate, useParams } from 'react-router'
import { handleAsyncRequest } from 'api/api'
  
type categoryListType = {
    id: number,
    title: string
}

type productListType = {
    id: number,
    name: string,
    price: number,
    discount: number,
    discountPrice: number,
    imageUrl: string
}

export const ProductList = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState<string>('');
    const [selectedCategoryDetail, setSelectedCategoryDetail] = useState<number | null>(null);
    const [categoryDetailList, setCategoryDetailList] = useState<categoryListType[]>([]);
    const [productList, setProductList] = useState<productListType[]>([]);

    const productListApi = useCallback(async(id: number) => {
        const res = await handleAsyncRequest(() => axios.post(`/api/admin/product/list`, {id: id}));
        const arr : productListType[] = [];
        
        res.productList.map((data: any) => (
            arr.push({
                id: data.id,
                name: data.name,
                price: data.price,
                discountPrice: data.price*((100-10)/100),
                discount: 10,
                imageUrl: `http://localhost:3001${data.productImg[0].img_path}/${data.productImg[0].image_hash}`
            })
        ));
        
        setProductList([...arr]);
        setSelectedCategoryDetail(id);
    }, []);
    
    useEffect(() => {
        const categoryInfoApi = async() => {
            const res = await handleAsyncRequest(() => axios.post(`/api/category/info/${categoryId}`));
            setCategory(res.title);
        }

        /**
         * 서브 카테고리 리스트 호출
         */
        const categoryDetailListApi = async() => {
            const res = await handleAsyncRequest(() => axios.post(`/api/category/${categoryId}/detail`));
            setCategoryDetailList([...res.categoryDetail]);
            setSelectedCategoryDetail(res.categoryDetail[0].id);
            productListApi(res.categoryDetail[0].id);
        };

        categoryInfoApi();
        categoryDetailListApi();
    }, [categoryId, productListApi])

    return (
        <div className="flex justify-center items-center w-full">
            <div className='min-w-1/2'>
                <h1 className='text-2xl py-10'>{category}</h1>
                <ul className='grid grid-cols-5 rounded-lg border-slate-200 border-solid border-l border-t text-center bg-white overflow-hidden cursor-pointer mb-8'>
                    {categoryDetailList.map((data, i) => (
                        <li key={i} className={`p-4 text-sm border-r border-b ${selectedCategoryDetail ? (selectedCategoryDetail === data.id && 'bg-indigo-500 text-white') : (i === 0 && 'bg-indigo-500 text-white')} hover:bg-indigo-500 hover:text-white`} onClick={() => productListApi(data.id)}>{data.title}</li>
                    ))}
                </ul>
                <ul className="divide-y divide-gray-100 mb-10">
                    {productList.map((data, i) => (
                        <li key={i} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={data.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{data.name} ( 할인률 {data.discount}% )</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.price}원 ( {data.discountPrice}원 )</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <button onClick={() => navigate(`/admin/products/${categoryId}/modify/${data.id}`)} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>수정</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='text-right'>
                    <button onClick={() => navigate('/admin/products/write')} className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>상품 등록</button>
                </div>
            </div>
        </div>
    )
}
