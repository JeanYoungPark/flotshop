import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'
import { nextSlide, prevSlide } from 'utils/slide/action'
import { fifthSlickSetting } from 'utils/slide/settings'
import pd04 from 'assets/images/mainBg04_1.jpg'
import pt05 from 'assets/images/point5.gif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

export const FifthSlideComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);

    fifthSlickSetting.customPaging = (i:number) => {
        return ( <span>{i}</span> )
    }
    
    fifthSlickSetting.beforeChange = (currentSlide: number, nextSlide: number) => {
        setSlickCurrentPage(nextSlide+1);
    }

    return (
        <div className="box">
            <h2>상품 후기</h2>
            <div className="slides products">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={{
                        nextEl: '.custom-button-next',
                        prevEl: '.custom-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.fifth-page',
                        renderBullet: (i: number, className: string) => {
                            return `<span class=${className}>${i}</span>`; 
                        }
                    }}
                    modules={[Navigation, Pagination]}
                >
                    {[1,1,1,1,1,1,1,1,1,1].map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="wrap">
                                <div><img src={pd04} alt="review"/></div>
                                <div className="info">
                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='custom-pagination-2 fifth-page'></div>
                <div className='button custom-button-prev'><BsArrowLeft/></div>
                <div className='button custom-button-next'><BsArrowRight/></div>
            </div>
            <div className="viewAll"><span>모두 보기</span></div>
        </div>
    )
}
