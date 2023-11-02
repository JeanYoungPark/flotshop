import React from 'react'
import Slider from 'react-slick'
import banner01 from 'assets/images/product/banner/sleeveless_1.png'
import banner02 from 'assets/images/product/banner/sleeveless_2.png'

export const BannerComponent = () => {

    const slickSetting = {
        autoplay: true,
        fade: true,
        speed: 1000,
    }

    return (
        <div>
            <Slider {...slickSetting}>
                <div><img src={banner01} alt="banner01" /></div>
                <div><img src={banner02} alt="banner02" /></div>
            </Slider>  
        </div>
    )
}
