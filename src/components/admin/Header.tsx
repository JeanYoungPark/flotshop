import React, { useCallback } from 'react'
import { RiListCheck, RiLoginBoxLine, RiPencilLine, RiPriceTag3Line } from 'react-icons/ri'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store';

const mainMenu = ['의류', '산책', '리빙'];

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const adminMenu = useSelector((state: RootState) => state.adminMenu);

    const handleClickMenu = useCallback((menu: string, url:string) => {
        dispatch({type: 'setName', name: menu});
        navigate(url);
    }, [dispatch, navigate])

    return (
        <div className='fixed min-w-1/6 h-full p-5 drop-shadow bg-indigo-600 z-10'>
            <h1 className='h-7 mb-10 bg-[url("assets/images/header/logo.svg")] bg-no-repeat -indent-96'>logo</h1>
            <ul className='flex flex-col h-full text-white text-base'>
                <li className='relative'>
                    <div className='flex p-3 mb-1 rounded-lg hover:bg-indigo-700 cursor-pointer'><RiListCheck className='mr-2'/>상품 리스트</div>
                    <ul className='relative flex flex-col rounded-lg bg-indigo-500 text-white text-base overflow-hidden'>
                        {mainMenu.map((name, i) => (
                            <li key={i} className={`flex p-3 pl-10 hover:bg-indigo-700 cursor-pointer ${adminMenu.name === `list/${name}` && 'bg-indigo-700'}`} onClick={() => handleClickMenu(`list/${name}`, `/admin/products/${name}`)}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={`flex p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer ${adminMenu.name === 'category' && 'bg-indigo-700'}`} onClick={() => handleClickMenu('category', '/admin/category')}>
                    <RiPencilLine className='mr-2'/>카테고리 등록
                </li>
                <li className={`flex p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer ${adminMenu.name === 'option' && 'bg-indigo-700'}`} onClick={() => handleClickMenu('option', '/admin/option')}>
                    <RiPencilLine className='mr-2'/>옵션 등록
                </li>
                <li className={`flex p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer ${adminMenu.name === 'qna' && 'bg-indigo-700'}`} onClick={() => handleClickMenu('qna', '/admin/qna')}>
                    <RiPriceTag3Line className='mr-2'/>문의하기 리스트
                </li>
                <li className={`flex p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer ${adminMenu.name === 'review' && 'bg-indigo-700'}`} onClick={() => handleClickMenu('review', '/admin/review')}>
                    <RiPriceTag3Line className='mr-2'/>상품후기 리스트
                </li>
                <li className={`flex p-3 mb-1 hover:bg-indigo-700 rounded-lg cursor-pointer ${adminMenu.name === 'admin' && 'bg-indigo-700'}`} onClick={() => handleClickMenu('admin', '/admin/user/list')}>
                    <RiPriceTag3Line className='mr-2'/>관리자 리스트
                </li>
            </ul>
            <span className='block absolute text-base text-white bottom-5 right-10'><a href="/admin/login" className='flex items-center'><RiLoginBoxLine className='mr-2'/>로그인</a></span>
        </div>
    )
}
