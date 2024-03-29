import React, {useState, useEffect} from 'react'
import "assets/css/common.css"
import 'assets/css/product.css'
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { DetailComponent } from 'components/product/DetailComponent';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';

export const ProductView = () => {
    const { productId } = useParams();
    const [scrollClass, setScrollClass] = useState<string>("");

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
        <>
            <Header headerType={scrollClass}/>
            <Search/>
            <Menu/>
            <div id='productDetail' className='container'>
                <DetailComponent productId={productId}/>
            </div>
            <Footer/>
        </>
    )
}
