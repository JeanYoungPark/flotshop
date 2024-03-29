import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick'
import { nextSlide, prevSlide } from 'utils/slide/action';
import { sixthSlickSetting } from 'utils/slide/settings';
import pd06 from 'assets/images/mainBg06_1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    navigation={{
                        nextEl: '.custom-button-next',
                        prevEl: '.custom-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.sixth-page',
                        renderBullet: (i: number, className: string) => {
                            return `<span class=${className}>${i}</span>`; 
                        }
                    }}
                    modules={[Navigation, Pagination]}
                >
                    {[1,1,1,1,1,1,1,1].map((data, i) => (
                        <SwiperSlide key={i}>
                             <div className="wrap">
                                <div><img src={pd06} alt="event"/></div>
                                <div className="info">
                                    <strong>추석맞이 20% 쿠폰 </strong>
                                    <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='custom-pagination-2 sixth-page'></div>
                <div className='button custom-button-prev'><BsArrowLeft/></div>
                <div className='button custom-button-next'><BsArrowRight/></div>
            </div>
            <div className="viewAll"><span>모두 보기</span></div>
        </div>
    )
}
