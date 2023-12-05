import React from 'react'
import { useParams } from 'react-router';

export const AdminRegister = () => {
    const { id } = useParams();

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <form className='space-y-6 min-w-1/2'>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">{id ? '관리자 수정' : '관리자 등록'}</h1>
                <div>
                    <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">아이디</label>
                    <div className="mt-2">
                        <input id="userId" name="userId" type="userId" autoComplete="nauserIdme" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
                    <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">이름</label>
                    <div className="mt-2">
                        <input id="name" name="name" type="name" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="emailId" className="block text-sm font-medium leading-6 text-gray-900">이메일</label>
                    <div className="mt-2 flex">
                        <div>
                            <input id="emailId" name="emailId" type="emailId" autoComplete="emailId" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
                        <div className="flex text-lg align-items-center px-2">@</div>
                        <div>
                            <input id="emailDomain" name="emailDomain" type="emailDomain" autoComplete="emailDomain" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
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
