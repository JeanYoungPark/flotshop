import React, {useEffect} from 'react'
import pd01 from 'assets/images/review/product_01.jpg'
import { Paging } from 'components/Paging'
import replay from 'assets/images/review/board_reply.png'
import secret from 'assets/images/review/board_secret.png'
import newIcon from 'assets/images/review/board_new.png'

export const QnaComponent = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.top')?.classList.add('onload');
        }, 500);
    }, []);

    return (
        <div className='wrapper'>
            <div className='top'>
                <h1>Q & A</h1>
            </div>
            <div className='table'>
                <table>
                    <colgroup>
                        <col style={{width: '70px'}}/>
                        <col style={{width: '180px'}}/>
                        <col style={{width: 'auto'}}/>
                        <col style={{width: '110px'}}/>
                        <col style={{width: '100px'}}/>
                        <col style={{width: '55px'}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th> NO</th>
                            <th>PRODUCT</th>
                            <th>SUBJECT</th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>HIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6,7].map((i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{i}</td>
                                        <td className='product'>
                                            <p>
                                                <span className='pdImg'><img src={pd01} alt="img01"/></span>
                                                <span className='name'>플로트 베이직 하프넥티셔츠 옐로우 강아지옷</span>
                                            </p>
                                        </td>
                                        <td className='subject'>
                                            <span>배송은 며칠 걸리나요</span>
                                            <img src={secret} alt="잠금" />
                                            <img src={newIcon} alt="새글" />
                                        </td>
                                        <td>신****</td>
                                        <td>2023-09-20<br/>16:22:29</td>
                                        <td>33</td>
                                    </tr>
                                    <tr className='replay'>
                                        <td>{i+1}</td>
                                        <td></td>
                                        <td className='subject'>
                                            <span>
                                                <img src={replay} alt="답변" />
                                                <span>배송은 며칠 걸리나요</span>
                                                <img src={secret} alt="잠금" />
                                                <img src={newIcon} alt="새글" />
                                            </span>
                                        </td>
                                        <td></td>
                                        <td>2023-09-20<br/>16:22:29</td>
                                        <td></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Paging/>
        </div>
    )
}
