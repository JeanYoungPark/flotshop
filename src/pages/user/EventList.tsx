import 'assets/css/main.css';
import 'assets/css/event.css';
import React, {useEffect, useState} from 'react'
import { CommonProvider } from 'contexts/CommonProvider';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';
import { Paging } from 'components/Paging';
import img01 from 'assets/images/event/event_01.jpg'
import { fromBottomIn40, fromTopIn20 } from 'utils';

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

    useEffect(() => {
        setTimeout(() => {
            fromTopIn20();
            fromBottomIn40();
        },500);
    }, []);

    return (
        <CommonProvider>
            <Header headerType={scrollClass}/>
            <Search/>
            <Menu/>
            <div id='eventList' className='container'>
                <div className='wrapper'>
                    <div className='top fromTopIn20'>
                        <h1>EVENT</h1>
                        <ul>
                            <li><span>전체</span></li>
                            <li className='active'><span>진행</span></li>
                            <li><span>종료</span></li>
                        </ul>
                    </div>
                    <div className='content'>
                        <ul className='events fromBottomIn40'>
                            {[1,2].map((i) => {
                                return (
                                    <li className='event' key={i}>
                                        <div><img src={img01} alt="event_01"/></div>
                                        <div className='description'>
                                            <h2>23FW 신상 출시</h2>
                                            <div>
                                                <p>23FW 신상 출시</p>
                                                <p>체리티셔츠/애플누빔조끼/플러피후리스 곰곰후드</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <Paging/>
            </div>
            </div>
            <Footer/>
        </CommonProvider>
    )
}
