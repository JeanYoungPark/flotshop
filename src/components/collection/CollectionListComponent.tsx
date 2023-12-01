import React, {useState, useEffect} from 'react'
import { Paging } from 'components/Paging'
import { BsWindowSplit } from 'react-icons/bs';
import { CiGrid2H, CiGrid41 } from 'react-icons/ci';
import img01 from 'assets/images/collection/collection_01.jpg'
import { fromTopIn20, fromBottomIn40 } from 'utils';

export const CollectionListComponent = () => {
    const [grid, setGrid] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            fromTopIn20();
            fromBottomIn40();
        }, 500)
    }, []);

    return (
        <div className='wrapper'>
            <div className='top fromTopIn20'>
                <h1>COLLECTION</h1>
                <ul>
                    <li><span>Keep warm 후리스 컬렉션</span></li>
                    <li className='active'><span>제로퍼제로 컬렉션</span></li>
                    <li><span>베이직 컬렉션</span></li>
                </ul>
            </div>
            <div className={`content ${grid === 1 ? 'typeA' : 'typeB'}`}>
                <div className='nav'>
                    <span className={`${grid === 1 && 'grid'}`}  onClick={() => setGrid(1)}><CiGrid2H /></span>
                    <span className={`${grid === 2 && 'grid'}`} onClick={() => setGrid(2)}><CiGrid41 /></span>
                </div>
                <ul className='collections fromBottomIn40'>
                    {[1,2,3,4,5,6].map(() => {
                        return (
                            <li className='collection'>
                                <div className="img">
                                    <div className="likes"><button><strong>Like</strong> <span className="count">0</span></button></div>
                                    <div className="icons">
                                        <span><BsWindowSplit /></span>
                                    </div>
                                    <img src={img01} alt="product 1"/>
                                </div>
                                <div className="description">
                                    <h2>플로트X제로퍼제로 펫 도어사인</h2>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <Paging/>
        </div>
    )
}
