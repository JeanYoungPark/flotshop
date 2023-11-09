import React, {useState, useEffect} from 'react'
import 'assets/css/main.css'
import 'assets/css/notice.css'
import { Header } from 'components/Header'
import { CommonProvider } from 'contexts/CommonProvider'
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { NoticeComponent } from 'components/notice/NoticeComponent';

export const Notice = () => {
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
            <div id='noticeList' className='container'>
                <NoticeComponent/>
            </div>
        </CommonProvider>
    )
}
