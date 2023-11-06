import React,  { useState } from 'react'
import img01 from 'assets/images/product/list/img01.jpg'
import { BsSuitHeart, BsHandbag, BsWindowSplit } from "react-icons/bs"
import { CiGrid2H, CiGrid41 } from "react-icons/ci"
import { Paging } from 'components/Paging'

export const ProductComponent = () => {
    const [grid, setGrid] = useState(2);

    return (
        <div className='content'>
            <div className='top'>
                <h1>PRODUCT</h1>
                <ul>
                    <li><span>의류</span></li>
                    <li><span>산책</span></li>
                    <li><span>리빙</span></li>
                </ul>
            </div>
            <div className='content'>
                <div className='nav'>
                    <span className={`${grid === 1 && 'grid'}`}  onClick={() => setGrid(1)}><CiGrid2H /></span>
                    <span className={`${grid === 2 && 'grid'}`} onClick={() => setGrid(2)}><CiGrid41 /></span>
                </div>
                <ul className={`products ${grid === 1 ? 'typeA' : 'typeB'}`}>
                    {[1,2,3,4,5,6].map(() => {
                        return (
                            <li className='product'>
                                <div className="img">
                                    <div className="likes"><button><strong>Like</strong> <span className="count">0</span></button></div>
                                    <div className="icons">
                                        <span><BsSuitHeart/></span>
                                        <span><BsHandbag /></span>
                                        <span><BsWindowSplit /></span>
                                    </div>
                                    <img src={img01} alt="product 1"/>
                                </div>
                                <div className="description">
                                    <strong className="name">플로트 캔디패딩조끼 강아지옷 2컬러</strong>
                                    <div className="reviewCount">리뷰 0</div>
                                    <div className="price line">30,000원</div>
                                    <div className="discountPrice">22,500원 <span className="discount">(25%)</span></div>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <Paging />
        </div>
    )
}
