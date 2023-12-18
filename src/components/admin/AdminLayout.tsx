import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie'
import { RootState } from 'store';

export const AdminLayout = () => {
const [cookies,] = useCookies(['flotshopUserSession']);
    const navigate = useNavigate();
    const userInfo = useSelector((state: RootState) => state.userInfo);
    
    useEffect(() => {
        if(cookies?.flotshopUserSession) {
            if(userInfo.is_admin !== 'Y'){
                alert('관리자만 이용이 가능한 페이지 입니다.');
                navigate('/');
            }
        }else{
            alert('로그인 후 이용해주세요');
            navigate('/admin/login');
        }
    }, [])

    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    )
}
