import React, {useState, useEffect} from 'react'
import 'assets/css/main.css'
import 'assets/css/qna.css'
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { Search } from 'components/Search';
import { QnaComponent } from 'components/qna/QnaComponent';
import { CommonProvider } from 'contexts/CommonProvider';
import { Footer } from 'components/Footer';

export const Qna = () => {
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
            <div id='qnaList' className='container'>
                <QnaComponent/>
            </div>
            <Footer/>
        </CommonProvider>
    )
}
