import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export const FirstSlideComponent = () => {
    return (
        <div className="slides">
            <Swiper
                spaceBetween={30}    
                effect={'fade'}
                loop={true}
                navigation={{
                    nextEl: '.custom-button-next',
                    prevEl: '.custom-button-prev',
                }}
                pagination={{type: 'fraction'}}
                modules={[Navigation, Pagination, EffectFade]}
            >
                <SwiperSlide><div className="banner banner01" /></SwiperSlide>
                <SwiperSlide><div className="banner banner02" /></SwiperSlide>
                <SwiperSlide><div className="banner banner03" /></SwiperSlide>
                <SwiperSlide><div className="banner banner04" /></SwiperSlide>
            </Swiper>
            <div className='button custom-button-prev'><BsArrowLeft/></div>
            <div className='button custom-button-next'><BsArrowRight/></div>
        </div>
    )
}
