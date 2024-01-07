import React, {useCallback, useEffect, SyntheticEvent, useRef} from 'react'
import axios from 'axios'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router'
import { ProductEditor } from 'components/product/ProductEditor'

function classNames(...classes: [string, string]) {
    return classes.filter(Boolean).join(' ')
}

type categoryListType = {
    id: number,
    title: string
}

export const ProductWrite = () => {
    const { id } = useParams();
    const [selectedCategory, setSelectedCategory] = useState<string>('선택해주세요.');
    const [selectedCategoryDetail, setSelectedCategoryDetail] = useState<string>('선택해주세요.');
    const [selectedOption, setSelectedOption] = useState<string>('선택해주세요.');
    const [categoryList, setCategoryList] = useState<categoryListType[]>([]);
    const [categoryDetailList, setCategoryDetailList] = useState<categoryListType[]>([]);
    const [optionList, setOptionList] = useState<categoryListType[]>([]);
    const [newProduct, setNewProduct] = useState<string>('');
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
        try {
            const formData = new FormData();
            formData.append('categoryId', selectedCategory);

            for(let file of files){
                formData.append('data', file);
            }

            const response = await axios.post("http://localhost:3001/api/admin/product/upload", formData, {
                headers: {'Content-type': 'multipart/form-data'}
            });

            console.log(response);
        } catch (error) {
            
        }
    }, [files, selectedCategory]);
    
    /**
     * 카테고리 리스트 호출
     */
    const categoryListApi = useCallback(async() => {
        try {
            const res = await axios.post('http://localhost:3001/api/category');
            
            if(res.status === 200){
                setCategoryList([...res.data.category]);
            }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }
    }, []);

     /**
         * 서브 카테고리 리스트 호출
         */
     const categoryDetailListApi = useCallback(async(id: number) => {
        try {
            const res = await axios.post(`http://localhost:3001/api/category/${id}/detail`);
            
            if(res.status === 200){
                setCategoryDetailList([...res.data.categoryDetail]);
            }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }
    }, []);

    const onSubmit = useCallback(async (e:SyntheticEvent) => {
        e.preventDefault();

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
        }

        const data = {
            category_id: selectedCategoryDetail,
            name: productName,
            price: productPrice,
        }
        try {
            const res = await axios.post('http://localhost:3001/api/product/add')
        } catch (error) {
            
        }
        handleFile();


    }, [handleFile, productName, productPrice, selectedCategory, selectedCategoryDetail]);

    useEffect(() => {
        categoryListApi();
    }, [categoryListApi]);
    
    return (
        <div className='pt-10 pb-10 flex w-full h-full justify-center items-center'>
            <form className='space-y-6 min-w-1/2 max-w-1/2' onSubmit={onSubmit}>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">{id ? '상품 수정' : '상품 등록'}</h1>
                <div>
                    <div className='flex'>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mr-2">새상품</label>
                        <div className="flex h-6 items-center">
                            <input
                            id="new"
                            onChange={(e) => setNewProduct(e.target.value)}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">새상품 체크 시 상품 타이틀 우측의 'new'아이콘이 노출됩니다.</p>
                </div>

                <div>
                    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">카테고리</Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selectedCategory}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {categoryList.map((data, i) => (
                                        <Listbox.Option
                                            key={i}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-1 pr-9'
                                            )}
                                            value={data.title}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center" onClick={() => categoryDetailListApi(data.id)}>
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')} >
                                                        {data.title}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-indigo-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox>
                </div>

                <div>
                    <Listbox value={selectedCategoryDetail} onChange={setSelectedCategoryDetail}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">세부 카테고리</Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selectedCategoryDetail}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {categoryDetailList.map((data, i) => (
                                            <Listbox.Option
                                                key={i}
                                                className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-1 pr-9'
                                                )}
                                                value={data.title}
                                            >
                                                {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')} >
                                                        {data.title}
                                                    </span>
                                                    </div>

                                                    {selected ? (
                                                    <span
                                                        className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    ) : null}
                                                </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox>
                </div>

                <div>
                    <Listbox value={selectedOption} onChange={setSelectedOption}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">옵션</Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selectedOption}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {optionList.map((data, i) => (
                                        <Listbox.Option
                                            key={i}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-1 pr-9'
                                            )}
                                            value={data.title}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')} >
                                                        {data.title}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-indigo-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox>
                </div>

                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">상품명</label>
                    <div className="mt-2">
                        <input id="name" type="text" required value={productName} onChange={(e) => setProductName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">금액</label>
                    <div className="mt-2">
                        <input id="price" type="text" required value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">할인률</label>
                    <div className="mt-2">
                        <input id="discount" type="text" required value={productDiscount} onChange={(e) => setProductDiscount(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        상품 이미지
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label 
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                            <span>Upload a file</span>
                            <input id="file-upload" name="img" type="file" multiple onChange={onChangeFiles} className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                    <ul className='grid gap-4 grid-cols-5 mt-3'>
                        {prevImg.map((url, i) => (
                            <li key={i} className='h-52 border rounded-lg border-gray-300 bg-cover' style={{backgroundImage:`url(${url})`}}></li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        상픔 설명
                    </label>
                    <div className="mt-2">
                        <ProductEditor value={productDes} setValue={setProductDes}/>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Save
                    </button>
                </div>
            </form>
        </div>
    )
}
