import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'

export const Option = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30 z-20" aria-hidden="true"/>
                <div className='fixed flex top-0 left-0 w-full h-full justify-center items-center z-20'>
                    <Dialog.Panel className="bg-white p-6 rounded-lg border border-slate-300 border-solid drop-shadow-lg">
                        <div className='space-y-6'>
                            <span className='flex flex-row-reverse'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer"  onClick={() => setIsOpen(false)}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>

                            <Dialog.Title className="text-lg font-semibold leading-5 text-gray-900">상세 옵션 등록</Dialog.Title>

                            <div className='flex'>
                                <div className='grow mr-2'>
                                    <input id="name" name="name" type="name" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
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

                            <ul>
                                <li className='flex justify-between mb-3'>
                                    <span className='text-base text-slate-500'>blue</span>
                                    <p className='flex'>
                                        <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                                        <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                                    </p>
                                </li>
                                <li className='flex justify-between mb-3'>
                                    <span className='text-base text-slate-500'>white</span>
                                    <p className='flex'>
                                        <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                                        <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                                    </p>
                                </li>
                                <li className='flex justify-between mb-3'>
                                    <span className='text-base text-slate-500'>black</span>
                                    <p className='flex'>
                                        <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                                        <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

            <div className='pt-10 flex w-full z-0 justify-center items-center'>
                <div className='space-y-6 min-w-1/2 pb-20'>
                    <form className='space-y-4'>
                        <h1 className="text-xl font-semibold leading-10 text-gray-900">옵션 등록</h1>
                        <div className='flex'>
                            <div className='grow mr-2'>
                                <input id="name" name="name" type="name" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
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
                        <li className='flex justify-between mb-3'>
                            <span className='text-base text-slate-500'>color</span>
                            <p className='flex'>
                                <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2' onClick={() => setIsOpen(true)}>세부 옵션</button></span>
                                <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                            </p>
                        </li>
                        <li className='flex justify-between mb-3'>
                            <span className='text-base text-slate-500'>color</span>
                            <p className='flex'>
                                <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                                <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                            </p>
                        </li>
                        <li className='flex justify-between mb-3'>
                            <span className='text-base text-slate-500'>color</span>
                            <p className='flex'>
                                <span className="block"><button className='bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500 mr-2'>세부 옵션</button></span>
                                <span className="block"><button className='bg-slate-300 px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-slate-200'>삭제</button></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
