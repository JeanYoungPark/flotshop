import React from 'react'
import { BsHandbag, BsSuitHeart, BsWindowSplit } from 'react-icons/bs'
import pd01 from 'assets/images/mainBg02_1.jpg'

export const FourthSlideComponent = () => {
    return (
        <div className="box">
            <h2>프로덕트</h2>
            <ul className="slides products">
                <li className="product">
                    <div className="description">
                        <span className="likes">Like <span className="count">0</span></span>
                        <>
                            <div className="reviewCount">리뷰 0</div>
                            <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                            <span className="brand">FLOT</span>
                            <span className="price">26,000원</span>
                        </>
                        <div className="icons">
                            <BsSuitHeart/>
                            <BsHandbag />
                            <BsWindowSplit />
                        </div>
                    </div>
                    <img src={pd01} alt="product 1"/>
                </li>
                <li className="product">
                    <div className="description">
                        <span className="likes">Like <span className="count">0</span></span>
                        <>
                            <div className="reviewCount">리뷰 0</div>
                            <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                            <span className="brand">FLOT</span>
                            <span className="price">26,000원</span>
                        </>
                        <div className="icons">
                            <BsSuitHeart/>
                            <BsHandbag />
                            <BsWindowSplit />
                        </div>
                    </div>
                    <img src={pd01} alt="product 1"/>
                </li>
                <li className="product">
                    <div className="description">
                        <span className="likes">Like <span className="count">0</span></span>
                        <>
                            <div className="reviewCount">리뷰 0</div>
                            <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                            <span className="brand">FLOT</span>
                            <span className="price">26,000원</span>
                        </>
                        <div className="icons">
                            <BsSuitHeart/>
                            <BsHandbag />
                            <BsWindowSplit />
                        </div>
                    </div>
                    <img src={pd01} alt="product 1"/>
                </li>
            </ul>
            <div className="viewAll"><span>모두 보기</span></div>
        </div>
    )
}
