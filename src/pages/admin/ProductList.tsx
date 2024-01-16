import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMutation, useQuery } from 'react-query'
import { productListApi } from 'api/admin/product'
import { categoryInfoApi, subCategoryListApi } from 'api/admin/category'
  
type categoryType = {
    id: number,
    title: string
}

type productType = {
    id: number,
    name: string,
    price: number,
    discount: string,
    imageUrl: string,
    productImg: {
        image_hash: string,
        img_path: string
    }[]
}

export const ProductList = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()
    const [subCategory, setSubCategory] = useState<number>();

    const { data: category } = useQuery('category', () => categoryInfoApi(categoryId));
    const { mutate: productMutate, data: productList } = useMutation((id: number) => productListApi(id));
    
    const { data: subCategoryList } = useQuery('subCategoryList', async() => {
        const res = await subCategoryListApi(categoryId);
        setSubCategory(res[0].id);
        return res;
    })

    const renderSubCategoryList = (subCategoryList || []).map((data: categoryType, i: number) => (
        <li key={i} className={`p-4 text-sm border-r border-b ${subCategory ? (subCategory === data.id && 'bg-indigo-500 text-white') : (i === 0 && 'bg-indigo-500 text-white')} hover:bg-indigo-500 hover:text-white`} onClick={() => setSubCategory(data.id)}>{data.title}</li>
    ))

    const renderProductList = (productList || []).map((data: productType, i: number) => (
        <li key={i} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`http://localhost:3001${data.productImg[0].img_path}/${data.productImg[0].image_hash}`} alt="" />
                <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{data.name} ( 할인률 {data.discount}% )</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.price}원 ( {(data.price - (data.price/100*10))}원 )</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button onClick={() => navigate(`/admin/products/${categoryId}/modify/${data.id}`)} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>수정</button>
            </div>
        </li>
    ))

    useEffect(() => {
        subCategory && productMutate(subCategory);
    }, [productMutate, subCategory])

    return (
        <div className="flex justify-center items-center w-full">
            <div className='min-w-1/2'>
                <h1 className='text-2xl py-10'>{category?.title}</h1>
                <ul className='grid grid-cols-5 rounded-lg border-slate-200 border-solid border-l border-t text-center bg-white overflow-hidden cursor-pointer mb-8'>
                    {renderSubCategoryList}
                </ul>
                <ul className="divide-y divide-gray-100 mb-10">
                    {renderProductList}
                </ul>
                <div className='text-right'>
                    <button onClick={() => navigate('/admin/products/write')} className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>상품 등록</button>
                </div>
            </div>
        </div>
    )
}
