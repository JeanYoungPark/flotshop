import React, {useState, useEffect} from 'react'
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { Search } from 'components/Search';
import { IntroduceComponent } from 'components/about/IntroduceComponent';
import { CommonProvider } from 'contexts/CommonProvider';
import { Footer } from 'components/Footer';

export const Introduce = () => {
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
            <div id='introduce' className='container'>
                <IntroduceComponent/>
            </div>
            <Footer/>
        </CommonProvider>
    )
}
