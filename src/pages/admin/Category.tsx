import React, {useState, SyntheticEvent, useEffect} from 'react'
import { Dialog } from '@headlessui/react'
import { useMutation, useQuery } from 'react-query'
import { categoryAddApi, categoryListApi, subCategoryAddApi, subCategoryListApi } from 'api/admin/category'

type categoryType = {
    id: number,
    title: string
}

export const Category = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryValue, setCategoryValue] = useState<string>('');
    const [categorySelected, setCategorySelected] = useState<number>();
    const [subCategoryValue, setSubCategoryValue] = useState<string>('');
    const [categoryDetailList, setCategoryDetailList] = useState<categoryType[]>([]);

    /**
     * 카테고리 리스트
     */
    const { data: categoryData, refetch: categoryRefetch } = useQuery('categoryList', categoryListApi, { initialData: [] })
    
    const renderCategoryList = (categoryData || []).map((data: categoryType, i: number) => (
        <li key={i} className='flex justify-between mb-3'>
            <span className='text-base text-slate-500'>{data.title}</span>
            <p className='flex'>
                <span className="block"><button onClick={() => openPopUp(data.id)} className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                {/* <span className="block"><button onClick={() => categoryDeleteApi(data.id)} className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span> */}
            </p>
        </li>
    ))

    /**
     * 서브 카테고리 리스트
     */
    const { mutate: subCategoryMutate, data: subCategoryData } = useMutation((id?: number) => subCategoryListApi(id))

    const openPopUp = (id: number) => {
        subCategoryMutate(id)
        setCategorySelected(id)
        setIsOpen(true)
    }

    const renderSubCategory = (subCategoryData || []).map((data: categoryType, i: number) => (
        <li key={i} className='flex justify-between mb-3'>
            <span className='text-base text-slate-500'>{data.title}</span>
            <p className='flex'>
                <span className="block"><button onClick={() => categoryDetailDeleteApi(data.id)} className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
            </p>
        </li>
    ))

    /**
     * 카테고리 등록
     */
    const onSubmit = async(e: SyntheticEvent) => {
        e.preventDefault();
        const res = await categoryAddApi(categoryValue);
        if(res){
            categoryRefetch();
            setCategoryValue('');
        }
    }

    /**
     * 서브 카테고리 등록
     */
    const onSubmitDetail = async(e: SyntheticEvent) => {
        e.preventDefault();

        const res = await subCategoryAddApi(categorySelected, subCategoryValue)
        if(res){
            setSubCategoryValue('')
            subCategoryMutate(categorySelected) 
        }
    }
    
    /**
     * 카테고리 삭제
     */
    // const categoryDeleteApi = async(id: number) => {
    //     const confirm = window.confirm('소분류 및 관련 상품이 모두 삭제 됩니다.\n삭제하시겠습니까?');

    //     if(confirm){
    //         const res = await handleAsyncRequest(() => axios.post(`/api/category/${id}/detail`));
            
    //         if(res.status === 200){
    //             if(res.categoryDetail.length === 0){
    //                 await handleAsyncRequest(() => axios.delete(`/api/category/${id}`));
    //                 categoryListApi();
    //             }
    //         }
    //     }

    // }

    /**
     * 서브 카테고리 삭제
     */
    const categoryDetailDeleteApi = async(id: number) => {
        // 상품이 있으면 물어보고 모두 삭제하고 카테고리 삭제
        try {
            // const res = await axios.delete(`http://localhost:3001/api/category/detail/${id}`);
            
            // if(res.status === 200){

            // }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }
    }

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30 z-20" aria-hidden="true"/>
                <div className='fixed flex top-0 left-0 w-full h-full justify-center items-center z-20'>
                    <Dialog.Panel className="bg-white p-6 rounded-lg border border-slate-300 border-solid drop-shadow-lg">
                        <div className='space-y-6'>
                            <span className='flex flex-row-reverse'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer"  onClick={() => setIsOpen(false)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>

                            <Dialog.Title className="text-lg font-semibold leading-5 text-gray-900">상세 옵션 등록</Dialog.Title>

                            <form onSubmit={onSubmitDetail}>
                                <div className='flex'>
                                    <div className='grow mr-2'>
                                        <input id="name" type="text" required value={subCategoryValue} onChange={(e) => setSubCategoryValue(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                                    </div>
                                    <div className="flex items-center justify-end gap-x-6">
                                        <button
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                        등록
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul>
                                {renderSubCategory}
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

            <div className='pt-10 flex w-full z-0 justify-center items-center'>
                <div className='space-y-6 min-w-1/2 pb-20'>
                    <form className='space-y-4' onSubmit={onSubmit}>
                        <h1 className="text-xl font-semibold leading-10 text-gray-900">카테고리 등록</h1>
                        <div className='flex'>
                            <div className='grow mr-2'>
                                <input id="name" type="text" required value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                            </div>
                            <div className="flex items-center justify-end gap-x-6">
                                <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                등록
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul>
                        {renderCategoryList}
                    </ul>
                </div>
            </div>
        </>
    )
}
