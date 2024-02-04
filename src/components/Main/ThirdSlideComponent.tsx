import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight, BsHandbag, BsSuitHeart, BsWindowSplit } from 'react-icons/bs';
import Slider from 'react-slick';
import { thirdSlickSetting } from 'utils/slide/settings';
import pd01 from 'assets/images/mainBg02_1.jpg'
import { nextSlide, prevSlide } from 'utils/slide/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export const ThirdSlideComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);

    thirdSlickSetting.beforeChange = (currentSlide: number, nextSlide: number) => {
        setSlickCurrentPage(Math.ceil(nextSlide / 2) + 1);
    }

    return (
        <div className="content">
            <div className="left">
                <div className="box">
                    <span>#인기상품</span>
                    <h2>이달의 베스트</h2>
                    <p>이번달 가장 많이 판매된 상품들 할인 이벤트 시작!</p>
                </div>
            </div>
            <div className="right">
                <div className="box">
                    <h3>MONTH BEST</h3>
                    <div className="slides products">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={15}
                            navigation={{
                                nextEl: '.custom-button-next',
                                prevEl: '.custom-button-prev',
                            }}
                            pagination={{
                                el: '.second-page',
                                type: 'custom',
                                renderCustom: function (swiper: any, current: number, total:number) {
                                    return current + '/' + total; 
                                }
                            }}
                            modules={[Navigation, Pagination]}
                        >
                            {[1,1,1,1,1].map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className="img">
                                        <img src={pd01} alt="product 1"/>
                                        <div className="discountRate">25% OFF</div>
                                    </div>
                                    <div className="timeSale">남은시간 1120일 03:24:16</div>
                                    <div className="description">
                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                        <div className="reviewCount">리뷰 0</div>
                                        <span className="price line">30,000원</span>
                                        <span className="discountPrice">22,500원 <span className="discount">(25%)</span></span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='custom-pagination second-page'></div>
                        <div className='button custom-button-prev'><BsArrowLeft/></div>
                        <div className='button custom-button-next'><BsArrowRight/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
