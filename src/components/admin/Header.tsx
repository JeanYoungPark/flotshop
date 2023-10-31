import React from 'react'
import { RiListCheck, RiLoginBoxLine, RiPencilLine, RiPriceTag3Line } from 'react-icons/ri'

export const Header = () => {
  return (
    <div className='fixed min-w-1/6 h-full p-5 drop-shadow bg-indigo-600 z-10'>
        <h1>logo</h1>
        <ul className='flex flex-col h-full text-white text-base'>
            <li className='p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer'>
                <a href="/admin/products/b" className='flex items-center'>
                    <RiListCheck className='mr-2'/>상품 리스트
                </a>
            </li>
            <li className='p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer'>
                <a href="/admin/products/write" className='flex items-center'>
                    <RiPencilLine className='mr-2'/>상품 등록
                </a>
            </li>
            <li className='p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer'>
                <a href="/admin/option" className='flex items-center'>
                    <RiPencilLine className='mr-2'/>옵션 등록
                </a>
            </li>
            <li className='p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer'>
                <a href="" className='flex items-center'><RiPriceTag3Line className='mr-2'/>문의하기 관리</a>
            </li>
            <li className='p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer'>
            <a href="" className='flex items-center'><RiPriceTag3Line className='mr-2'/>상품후기 관리</a>
            </li>
        </ul>
        <span className='block absolute text-base text-white bottom-5 right-10'><a href="/admin/login" className='flex items-center'><RiLoginBoxLine className='mr-2'/>로그인</a></span>
    </div>
  )
}
