import { Paging } from 'components/Paging'
import React, {useEffect} from 'react'
import { fromTopIn20 } from 'utils';

export const NoticeComponent = () => {
    useEffect(() => {
        setTimeout(() => {
            fromTopIn20();
        }, 500);
    }, []);

    return (
        <div className='wrapper'>
            <div className='top fromTopIn20'>
                <h1>NOTICE</h1>
            </div>
            <div className='table'>
                <table>
                    <colgroup>
                        <col style={{width: '70px'}}/>
                        <col style={{width: 'auto'}}/>
                        <col style={{width: '100px'}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th> NO</th>
                            <th>SUBJECT</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6,7].map((i) => {
                            return (
                                <tr>
                                    <td>{i}</td>
                                    <td className='subject'>
                                        <p>
                                            <span className='view'>VIEW</span>
                                            <span>좋아요!!</span>
                                        </p>
                                    </td>
                                    <td>2023-09-20</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Paging/>
        </div>
    )
}
