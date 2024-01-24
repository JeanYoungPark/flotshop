import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import { nextInfiniteSlide, prevInfiniteSlide } from 'utils/slide/action';
import { firstSlickSetting } from 'utils/slide/settings';

export const FirstSlideComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);
    
    firstSlickSetting.beforeChange = (currentSlide: number, nextSlide: number) => {
        setSlickCurrentPage(nextSlide+1);
    };

    return (
        <div className="slides">
            <div className={`arrow prev ${slickCurrentPage === 1 && 'disable'}`} onClick={() => prevInfiniteSlide(sliderRef)}><BsArrowLeft/></div>
            <div className={`arrow next ${slickCurrentPage === 4 && 'disable'}`} onClick={() => nextInfiniteSlide(sliderRef)}><BsArrowRight/></div>
            <Slider ref={sliderRef} {...firstSlickSetting}>
                <div className="banner banner01"></div>
                <div className="banner banner02"></div>
                <div className="banner banner03"></div>
                <div className="banner banner04"></div>
            </Slider>
            <div className="custom-dot">
                <span>{slickCurrentPage}/4</span>
            </div>
        </div>
    )
}
