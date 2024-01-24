import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick'
import { nextSlide, prevSlide } from 'utils/slide/action';
import { sixthSlickSetting } from 'utils/slide/settings';
import pd06 from 'assets/images/mainBg06_1.jpg'

export const SixthSlideComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);

    sixthSlickSetting.customPaging = (i:number) => {
        return ( <span>{i}</span> )
    }

    sixthSlickSetting.beforeChange = (currentSlide: number, nextSlide: number) => {
        setSlickCurrentPage(nextSlide+1);
    }

    return (
        <div className="box">
            <h2>이벤트 / 뉴스</h2>
            <div className="slides events">
                <div className={`arrow prev ${slickCurrentPage === 1 && 'disable'}`} onClick={() => prevSlide(sliderRef, slickCurrentPage)}><BsArrowLeft/></div>
                <div className={`arrow next ${slickCurrentPage === 3 && 'disable'}`} onClick={() => nextSlide(sliderRef, slickCurrentPage)}><BsArrowRight/></div>
                <Slider ref={sliderRef} {...sixthSlickSetting}>
                    <div className="product">
                        <div className="wrap">
                            <div><img src={pd06} alt="event"/></div>
                            <div className="info">
                                <strong>추석맞이 20% 쿠폰 </strong>
                                <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="wrap">
                            <div><img src={pd06} alt="event"/></div>
                            <div className="info">
                                <strong>추석맞이 20% 쿠폰 </strong>
                                <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="wrap">
                            <div><img src={pd06} alt="event"/></div>
                            <div className="info">
                                <strong>추석맞이 20% 쿠폰 </strong>
                                <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="wrap">
                            <div><img src={pd06} alt="event"/></div>
                            <div className="info">
                                <strong>추석맞이 20% 쿠폰 </strong>
                                <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="viewAll"><span>모두 보기</span></div>
        </div>
    )
}
