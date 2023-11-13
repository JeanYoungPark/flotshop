import React, {useState, useEffect} from 'react'
import 'assets/css/main.css'
import 'assets/css/about.css'
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { Search } from 'components/Search';
import { VideoComponent } from 'components/about/VideoComponent';
import { CommonProvider } from 'contexts/CommonProvider';

export const Video = () => {
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
            <div id='videoIntroduce' className='container'>
                <VideoComponent/>
            </div>
        </CommonProvider>
    )
}
