import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import review1 from 'assets/images/mainBg04_1.jpg'

export const ReviewView = () => {
    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <div className="min-w-1/2 max-w-1/2">
                <h1 className="text-xl font-semibold leading-10 text-gray-900">QnA</h1>
                <dl>
                    <div className="pt-6">
                        <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">너무 좋아요!</dd>
                        <p className='text-xs mt-2'>2023-05-06 14:21:00</p>
                    </div>
                    <div className="pt-6">
                        <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-2">
                        너무너무 좋아요 잘 쓰고 있어요. 강아지도 좋아합니다!!! 굳굳 너무 만족 스러워요 다음에 또 다른걸로 주문하려고도 패딩도 있으면 너무 좋을꺼 가타요~~~
                        </dd>
                    </div>
                    <div className="pt-6">
                        <dt className="text-sm font-medium leading-6 text-gray-900">첨부 파일</dt>
                        <dd className="mt-2 text-sm text-gray-900 col-span-2">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div className='mt-3 grid grid-cols-4 gap-1'>
                                <div><img src={review1} alt="첨부이미지 1" /></div>
                                <div><img src={review1} alt="첨부이미지 1" /></div>
                                <div><img src={review1} alt="첨부이미지 1" /></div>
                                <div><img src={review1} alt="첨부이미지 1" /></div>
                                <div><img src={review1} alt="첨부이미지 1" /></div>
                            </div>
                        </dd>
                    </div>
                </dl>
                {/* <div className='pt-8'>
                    <span className="block text-sm font-medium leading-6 text-gray-900">관리자 답변</span>
                    <div className="mt-2 text-sm leading-6 text-gray-700 col-span-2">
                        너무너무 좋아요 잘 쓰고 있어요. 강아지도 좋아합니다!!! 굳굳 너무 만족 스러워요 다음에 또 다른걸로 주문하려고도 패딩도 있으면 너무 좋을꺼 가타요~~~
                    </div>
                    <div className='p-4 text-right'>
                        <button type='submit' className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>삭제</button>
                    </div>
                </div> */}
                <div className='pt-8'>
                    <form>
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">관리자 답변</label>
                            <div className="mt-2">
                                <textarea
                                id="review"
                                name="review"
                                rows={4}
                                className="block w-full rounded-t-md border border-b-0 p-4 text-gray-900 placeholder:text-gray-400 text-sm leading-6 resize-none outline-none"
                                defaultValue={''}
                                />
                                <div className='rounded-b-md border border-t-0 p-4 text-right'>
                                    <button type='submit' className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>등록</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='p-4 text-right'>
                    <button type='submit' className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>목록</button>
                </div>
            </div>
        </div>
    )
}
