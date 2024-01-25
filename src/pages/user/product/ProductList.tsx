import React, { useEffect, useState } from 'react'
import "assets/css/common.css"
import 'assets/css/product.css'
import { BannerComponent } from 'components/product/BannerComponent'
import { ProductComponent } from 'components/product/ProductComponent'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { Menu } from 'components/Menu'
import { CommonProvider } from 'contexts/CommonProvider'
import { Footer } from 'components/Footer'
import { useParams } from 'react-router-dom'

export const ProductList = () => {
    const { categoryId } = useParams();
    const [scrollClass, setScrollClass] = useState<string>("");
    console.log(categoryId)
    useEffect(() => {
        const handleScroll = () => {         
            if(window.scrollY === 0) {
                setScrollClass('');
            }else if(window.scrollY >= 200){
                setScrollClass('fixedTypeB');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <CommonProvider>
            <Header headerType={scrollClass}/>
            <Search/>
            <Menu/>
            <div id='productList' className='container'>
                <BannerComponent/>
                <ProductComponent/>
            </div>
            <Footer/>
        </CommonProvider>
    )
}
