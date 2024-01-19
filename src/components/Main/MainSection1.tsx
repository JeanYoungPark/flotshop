import { MainContext } from 'contexts/MainProvider';
import React, { useContext, useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';

export const MainSection1 = () => {
    const mainData = useContext(MainContext);
    const sliderRef = useRef<Slider>(null);

    return (
        <div className="section first">
            <div className="slides">
                <div className={`arrow prev ${mainData?.pages.slickCurrentPage === 1 && 'disable'}`} onClick={() => mainData?.prevInfiniteSlide(sliderRef)}><BsArrowLeft/></div>
                <div className={`arrow next ${mainData?.pages.slickCurrentPage === 4 && 'disable'}`} onClick={() => mainData?.nextInfiniteSlide(sliderRef)}><BsArrowRight/></div>
                <Slider ref={sliderRef} {...mainData?.settings.slickSetting}>
                    <div className="banner banner01"></div>
                    <div className="banner banner02"></div>
                    <div className="banner banner03"></div>
                    <div className="banner banner04"></div>
                </Slider>
                <div className="custom-dot">
                    <span>{mainData?.pages.slickCurrentPage}/4</span>
                </div>
            </div>
        </div>
    )
}
