import React, {useEffect, useState} from 'react'
import 'assets/css/main.css';
import 'assets/css/event.css';
import { CommonProvider } from 'contexts/CommonProvider';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { EventListComponent } from 'components/event/EventListComponent';

export const EventList = () => {
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
            <div id='eventList' className='container'>
                <EventListComponent/>
            </div>
        </CommonProvider>
    )
}
