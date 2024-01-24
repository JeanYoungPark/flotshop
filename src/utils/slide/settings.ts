import React, { ReactElement } from 'react'

type settingTypes = {
    autoplay?: boolean;
    dots?: boolean,
    arrows?: boolean;
    infinite?: boolean;
    fade?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    adaptiveHeight?: boolean,
    dotsClass?: string;
    customPaging?: (index: number) => ReactElement;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
}

/**
 * main
 */
export const firstSlickSetting: settingTypes = {
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 1000
}

export const secondSlickSetting: settingTypes = {
    autoplay: true,
    arrows: false,
    infinite: false
};

export const thirdSlickSetting: settingTypes = {
    autoplay: true,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true
}

export const fifthSlickSetting: settingTypes = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dotsClass: "custom-slick-dots"
}

export const sixthSlickSetting: settingTypes = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "custom-slick-dots",
}