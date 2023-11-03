import React, { useCallback, useEffect, useState } from 'react'
import "assets/css/common.css"
import 'assets/css/product.css'
import { BannerComponent } from 'components/product/BannerComponent'
import { ProductComponent } from 'components/product/ProductComponent'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { Menu } from 'components/Menu'

export const ProductList = () => {
    const [scrollClass, setScrollClass] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) setScrollClass('fixedTypeB');
        if(window.scrollY === 0) setScrollClass('');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <Header headerType={scrollClass}/>
            <Search/>
            <Menu/>
            <BannerComponent/>
            <ProductComponent/>
        </>
    )
}
