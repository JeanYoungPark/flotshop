import axios from 'axios'
import React, {useEffect, useState, useCallback} from 'react'
import { useNavigate, useParams } from 'react-router'
import { handleAsyncRequest } from 'api/api'

const people = [
    {
        id: 1,
        name: '상품 이름',
        price: '20000',
        discount: '20',
        discountPrice: 20000/20*100,
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 1,
        name: '상품 이름',
        price: '20000',
        discount: '20',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
  
type categoryListType = {
    id: number,
    title: string
}

export const ProductList = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState<string>('');
    const [categoryDetailList, setCategoryDetailList] = useState<categoryListType[]>([]);

    const productListApi = useCallback(async() => {
        // 상품 호출
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
        };

        categoryInfoApi();
        categoryDetailListApi();
    }, [categoryId])

    return (
        <div className="flex justify-center items-center w-full">
            <div className='min-w-1/2'>
                <h1 className='text-2xl py-10'>{category}</h1>
                <ul className='grid grid-cols-5 rounded-lg border-slate-200 border-solid border-l border-t text-center bg-white overflow-hidden cursor-pointer mb-8'>
                    {categoryDetailList.map((data, i) => (
                        <li key={i} className='p-4 text-sm border-r border-b hover:bg-indigo-500 hover:text-white'>{data.title}</li>
                    ))}
                </ul>
                <ul className="divide-y divide-gray-100 mb-10">
                    {people.map((person) => (
                        <li key={person.id} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name} ( 할인률 {person.discount}% )</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.price}원 ( {person.discountPrice}원 )</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <button onClick={() => navigate(`/admin/products/${category}/1/modify`)} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>수정</button>
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
