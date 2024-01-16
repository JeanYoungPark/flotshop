import React, { useEffect, SyntheticEvent, Fragment, useState, useReducer } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { ProductEditor } from 'components/product/ProductEditor'
import { useMutation, useQuery } from 'react-query'
import { categoryListApi, subCategoryListApi } from 'api/admin/category'
import { optionListApi, subOptionListApi } from 'api/admin/option'
import { boardImageUploadApi, productImageUploadApi } from 'api/admin/file'
import { productAddApi } from 'api/admin/product'

function classNames(...classes: [string, string]) {
    return classes.filter(Boolean).join(' ')
}

type categoryType = {
    id?: number,
    title?: string
}

type optionType = {
    id?: number,
    title?: string
}

const reducer = (state: { desc: string }, action: { type: string, payload: string }) => {
	switch (action.type) {
		case 'UPDATE':
			return { desc: action.payload }
		default:
			return state;
	}
}

export const ProductModify = () => {
    const [newProduct, setNewProduct] = useState<string>('')

    const [selectedCategory, setSelectedCategory] = useState<categoryType | null>(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState<categoryType | null>(null)
    const [selectedOption, setSelectedOption] = useState<optionType | null>(null)

    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<string>('')
    const [productDiscount, setProductDiscount] = useState<string>('0')
    const [files, setFiles] = useState<File[]>([])
    const [prevImg, setPrevImg] = useState<string[]>([])
	const [productDes, setProductDes] = useReducer(reducer, { desc: '' })
    
    /**
     * 카테고리 리스트 호출
     */
    const { data: categoryData } = useQuery('categoryList', categoryListApi, { initialData: [] })

    const renderCategory = (categoryData || []).map((data: categoryType, i: number) => (
        <Listbox.Option
            key={i}
            className={({ active }) =>
            classNames(
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-1 pr-9'
            )}
            value={data}
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
    ))
    
	/**
     * 서브 카테고리 리스트 호출
     */
	const { mutate: subCategoryMutate, data: subCategoryList } = useMutation((id: number) => subCategoryListApi(id))

	const renderSubCategory = (subCategoryList || []).map((data: categoryType, i:number) => (
		<Listbox.Option
			key={i}
			className={({ active }) =>
			classNames(
				active ? 'bg-indigo-600 text-white' : 'text-gray-900',
				'relative cursor-default select-none py-2 pl-1 pr-9'
			)}
			value={data}
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
	))

	useEffect(() => {
		selectedCategory?.id && subCategoryMutate(selectedCategory.id);
	}, [selectedCategory])

    /**
     * 옵션 리스트 호출
     */
    const { data: optionData } = useQuery('optionList', optionListApi, { initialData: [] })

    const renderOption = (optionData || []).map((data: optionType, i: number) => (
        <Listbox.Option
            key={i}
            className={({ active }) =>
            classNames(
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-1 pr-9'
            )}
            value={data}
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
    ))

	/**
     * 서브 옵션 리스트 호출
     */
	const { mutate: subOptionMutate, data: subOptionList } = useMutation((id: number) => subOptionListApi(id))

	const renderSubOption = (subOptionList || []).map((data: optionType, i:number) => (
		<span key={i} className='ml-1 p-1 rounded inline-block bg-gray-200'>{data.title}</span>
	))

	useEffect(() => {
		selectedOption?.id && subOptionMutate(selectedOption.id)
	}, [selectedOption])

    const onChangeFiles = (e: any) => {
        const newFiles = e.target.files;
        const FileList = [];
        const urlList = [];

        for(let i = 0; i < newFiles.length; i++) {
            FileList.push(newFiles[i]);
            urlList.push(URL.createObjectURL(newFiles[i]));
        }
        
        setFiles(FileList);
        setPrevImg(urlList);
    }

    const handleFile = async () => {
        const formData = new FormData();
        if(selectedSubCategory?.id){
            formData.append('categoryId', selectedSubCategory.id.toString());
    
            for(let file of files){
                formData.append('data', file);
            }
    
			productImageUploadApi(formData);
        }
    }
    
    const onSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();
        const matches = [];
        const regex = /data-id="(\d+)"/g;
		let match;

		while ((match = regex.exec(productDes.desc)) !== null) {
			matches.push(match[1]);
		}

        const data = {
            category_id: selectedSubCategory?.id,
            name: productName,
            price: productPrice,
            option_id: selectedOption?.id,
            description: productDes.desc
        }

		productAddApi(data);
		// 상품이미지 업로드
        handleFile();
		// 상품 상세 글쓰기 이미지 업로드
        boardImageUploadApi(matches);

        // 상품 상세로 이동

    }

    
    return (
        <div className='pt-10 pb-10 flex w-full h-full justify-center items-center'>
            <form className='space-y-6 min-w-1/2 max-w-1/2' onSubmit={onSubmit}>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">상품 등록</h1>
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
                                    <span className="ml-3 block truncate">{selectedCategory?.title ? selectedCategory?.title : '선택해주세요.'}</span>
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
                                        {renderCategory}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox>
                </div>

                <div>
                    <Listbox value={selectedSubCategory} onChange={setSelectedSubCategory}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">세부 카테고리</Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selectedSubCategory?.title ? selectedSubCategory?.title : '선택해주세요.'}</span>
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
                                        {renderSubCategory}
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
                                    <span className="ml-3 block truncate">{selectedOption?.title ? selectedOption?.title : '선택해주세요.'}</span>
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
                                        {renderOption}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox>
                    <div className='pt-2'>
                        <p>항목: {renderSubOption}
                        </p>
                    </div>
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
                        <ProductEditor state={productDes} dispatch={setProductDes}/>
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
