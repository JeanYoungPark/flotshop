import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { useCookies } from 'react-cookie';

export const AdminLayout = () => {
    const [cookies,] = useCookies(['flotshopUserSession']);
    console.log(cookies);
    
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    )
}
