import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight, BsHandbag, BsSuitHeart, BsWindowSplit } from 'react-icons/bs'
import Slider from 'react-slick'
import { secondSlickSetting } from 'utils/slide/settings'
import pd01 from 'assets/images/mainBg02_1.jpg'
import pd02 from 'assets/images/mainBg02_2.jpg'
import pd03 from 'assets/images/mainBg02_3.jpg'
import { nextSlide, prevSlide } from 'utils/slide/action'

export const SecondSlideComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);

    secondSlickSetting.beforeChange = (currentSlide: number, nextSlide: number) => {
        setSlickCurrentPage(nextSlide+1);
    }

    return (
        <div className="content">
            <div className="left">
                <div className="slides products">
                    <div className={`arrow prev ${slickCurrentPage === 1 && 'disable'}`} onClick={() => prevSlide(sliderRef, slickCurrentPage)}><BsArrowLeft/></div>
                    <div className={`arrow next ${slickCurrentPage === 3 && 'disable'}`} onClick={() => nextSlide(sliderRef, slickCurrentPage)}><BsArrowRight/></div>
                    <Slider ref={sliderRef} {...secondSlickSetting}>
                        <div className="product">
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
                        </div>
                        <div className="product"><img src={pd02} alt="product 2"/></div>
                        <div className="product"><img src={pd03} alt="product 3"/></div>
                    </Slider>
                    <div className="custom-dot">
                        <span>{slickCurrentPage}/3</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <span>#플로트 F/W 추천</span>
                <h2>견체공학으로 편안한</h2>
                <p>
                    플로트의 견체공학으로 편안한<br/>
                    간절기에 딱 좋은 스타일을 추천합니다.
                </p>
            </div>
        </div>
    )
}
