import React from 'react'
import { useNavigate } from 'react-router';

const user = [
    {
        id: 1,
        user_id: 'aaa',
        name: 'aaaa',
        reg_date: '2023-01-21'
    },
    {
        id: 2,
        user_id: 'bbb',
        name: 'bbbb',
        reg_date: '2023-01-21'
    },
]

export const AdminList = () => {
    const navigate = useNavigate();

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <div className='min-w-1/2'>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">관리자 리스트</h1>
                <ul className="divide-y divide-gray-100 mb-10">
                    {user.map((user) => (
                        <li key={user.id} className="flex justify-between gap-x-6 py-5 ">
                            <div className="flex min-w-0 gap-x-4">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{user.user_id}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.reg_date}</p>
                            </div>
                            <div className="flex shrink-0">
                                <button onClick={() => navigate(`/admin/user/modify/1`)} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 mr-2'>수정</button>
                                <button onClick={() => navigate(`/admin/user/delete`)} className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='text-right'>
                    <button onClick={() => navigate('/admin/user/register')} className='rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300'>관리자 등록</button>
                </div>
            </div>
        </div>
    )
}
