import React from 'react'
import { BsArrowLeft, BsArrowRight, BsHandbag, BsSuitHeart, BsWindowSplit } from 'react-icons/bs'
import pd01 from 'assets/images/mainBg02_1.jpg'
import pd02 from 'assets/images/mainBg02_2.jpg'
import pd03 from 'assets/images/mainBg02_3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SecondSlideComponent = () => {
    return (
        <div className="content">
            <div className="left">
                <div className="slides products">
                    <Swiper
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-button-next',
                            prevEl: '.custom-button-prev',
                        }}
                        pagination={{
                            el: '.first-page',
                            type: 'custom',
                            renderCustom: function (swiper: any, current: number, total:number) {
                                return current + '/' + total; 
                            }
                        }}
                        modules={[Navigation, Pagination]}
                    >
                        {[1,1,1,1,1].map((data, i) => (
                            <SwiperSlide key={i}>
                                <img src={pd01} alt="product 1"/>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='custom-pagination first-page'></div>
                    <div className='button custom-button-prev'><BsArrowLeft/></div>
                    <div className='button custom-button-next'><BsArrowRight/></div>
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
