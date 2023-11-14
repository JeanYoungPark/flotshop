import React, {useState, useEffect} from 'react'
import { CommonProvider } from 'contexts/CommonProvider'
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { OffLineComponent } from 'components/about/OffLineComponent';

export const OffLine = () => {
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
        <CommonProvider>
            <Header headerType={scrollClass}/>
            <Search/>
            <Menu/>
            <div id='offline' className='container'>
                <OffLineComponent/>
            </div>
        </CommonProvider>
    )
}
