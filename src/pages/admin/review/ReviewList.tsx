import React from 'react'
import { useNavigate } from 'react-router-dom';

const review = [
    {
        id: 1,
        title: '후기 타이틀',
        date: '2023-05-08',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 1,
        title: '후기 타이틀',
        date: '2023-05-08',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export const ReviewList = () => {
    const navigate = useNavigate();

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <div className='min-w-1/2'>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">상품 후기</h1>
                <ul className="divide-y divide-gray-100 mb-10">
                    {review.map((review) => (
                        <li key={review.id} className="flex justify-between gap-x-6 py-5 ">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={review.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto"> 
                                <p className="text-sm font-semibold leading-6 text-gray-900">{review.title}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex shrink-0">
                                <button onClick={() => navigate(`/admin/review/view/1`)} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 mr-2'>답변 등록</button>
                                <button onClick={() => navigate(`/admin/products`)} className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
