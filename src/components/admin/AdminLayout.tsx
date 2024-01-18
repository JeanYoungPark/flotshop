import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const urlArr = [
    '/admin/login',
    '/admin/join'
]

export const AdminLayout = () => {
    const { pathname } = useLocation();
    const [cookies,] = useCookies(['flotshopUserSession']);
    const navigate = useNavigate();
    const userInfo = useSelector((state: RootState) => state.userInfo);
    
    useEffect(() => {
        if(!urlArr.includes(pathname)){
            if(cookies?.flotshopUserSession) {
                if(userInfo.is_admin !== 'Y'){
                    alert('관리자만 이용이 가능한 페이지 입니다.');
                    navigate('/');
                }
            }else{
                alert('로그인 후 이용해주세요');
                navigate('/admin/login'); 
            }
        }
    }, [cookies?.flotshopUserSession, navigate, pathname, userInfo.is_admin])

    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    )
}
