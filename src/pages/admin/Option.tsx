import React, { useState, useEffect, useCallback, SyntheticEvent } from 'react'
import { Dialog } from '@headlessui/react'
import axios from 'axios'
import { handleAsyncRequest } from 'api/api'

type optionListType = {
    id: number,
    title: string
}

export const Option = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [optionValue, setOptionValue] = useState('');
    const [optionList, setOptionList] = useState<optionListType[]>([]);
    const [optionDetailValue, setOptionDetailValue] = useState('');
    const [optionDetailList, setOptionDetailList] = useState<optionListType[]>([]);
    const [optionSelected, setOptionSelected] = useState<number>();

    const onSubmit = useCallback(async(e: SyntheticEvent) => {
        e.preventDefault();
        
        const res = await handleAsyncRequest(() => axios.post('/api/option/add', {title: optionValue}));
        
        setOptionList([
            ...optionList,
            res.result
        ]);
        setOptionValue('');
    }, []);
    
    /**
     * 옵션 삭제
     */
    const optionDeleteApi = useCallback(async(id: number) => {
        // const confirm = window.confirm('소분류 및 관련 상품의 옵션이 모두 삭제 됩니다.\n삭제하시겠습니까?');

        // if(confirm){
        //     const res = await axios.post(`http://localhost:3001/api/category/${id}/detail`);
            
        //     if(res.status === 200){
        //         if(res.data.categoryDetail.length === 0){
        //             try {
        //                 const res = await axios.delete(`http://localhost:3001/api/category/${id}`);
                        
        //                 if(res.status === 200){
        //                     categoryListApi();
        //                 }
        //             } catch (error) {
        //                 console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        //             }
        //         }
        //     }
        // }

    }, []);

     /**
     * 서브 옵션 리스트 호출
     */
     const optionDetailListApi = useCallback(async(id: number) => {
        
         const res = await handleAsyncRequest(() => axios.post(`/api/option/${id}/detail`));
         
         setIsOpen(true);
         setOptionSelected(id);
         setOptionDetailList([...res.optionDetail]);
    },[]);

    /**
     * 서브 옵션 등록
     */
    const onSubmitDetail = useCallback(async(e: SyntheticEvent) => {
        e.preventDefault();

        const res = await handleAsyncRequest(() => axios.post(`/api/option/${optionSelected}/detail/add`, {title: optionDetailValue}));
        
        setOptionDetailValue('');
        setOptionDetailList([
            ...optionDetailList,
            res.result
        ]);      
    }, [optionDetailList, optionDetailValue, optionSelected]);

    /**
     * 서브 옵션 삭제
     */
    const optionDetailDeleteApi = useCallback(async(id: number) => {
        // 상품이 있으면 물어보고 모두 삭제하고 카테고리 삭제
        try {
            // const res = await axios.delete(`http://localhost:3001/api/category/detail/${id}`);
            
            // if(res.status === 200){

            // }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }
    }, []);

    useEffect(() => {
        const optionList = (async() => {
            const res = await handleAsyncRequest(() => axios.post('/api/option'));
            
            setOptionList([...res.option]);
        });

        optionList();
    }, [])

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
                                        <input type="text" required value={optionDetailValue} onChange={(e) => setOptionDetailValue(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
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
                                {optionDetailList.map((data, i) => (
                                    <li key={i} className='flex justify-between mb-3'>
                                        <span className='text-base text-slate-500'>{data.title}</span>
                                        <p className='flex'>
                                            <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200' onClick={() => optionDetailDeleteApi(data.id)}>삭제</button></span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

            <div className='pt-10 flex w-full z-0 justify-center items-center'>
                <div className='space-y-6 min-w-1/2 pb-20'>
                    <form className='space-y-4' onSubmit={onSubmit}>
                        <h1 className="text-xl font-semibold leading-10 text-gray-900">옵션 등록</h1>
                        <div className='flex'>
                            <div className='grow mr-2'>
                                <input type="test" required value={optionValue} onChange={(e) => setOptionValue(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
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
                        {optionList.map((data, i) => (
                            <li key={i} className='flex justify-between mb-3'>
                                <span className='text-base text-slate-500'>{data.title}</span>
                                <p className='flex'>
                                    <span className="block">
                                        <button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2' onClick={() => optionDetailListApi(data.id)}>세부 옵션</button>
                                    </span>
                                    <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200' onClick={() => optionDeleteApi(data.id)}>삭제</button></span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
