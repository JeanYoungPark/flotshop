import React from 'react'
import { Paging } from 'components/Paging'
import img01 from 'assets/images/event/event_01.jpg'

export const EventListComponent = () => {
  return (
    <div className='wrapper'>
        <div className='top'>
            <h1>EVENT</h1>
            <ul>
                <li><span>전체</span></li>
                <li className='active'><span>진행</span></li>
                <li><span>종료</span></li>
            </ul>
        </div>
        <div className='content'>
            <ul className='events'>
                {[1,2].map(() => {
                    return (
                        <li className='event'>
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
        <Paging
         />
    </div>
  )
}
