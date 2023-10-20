import React, { ReactElement, ReactNode, createContext, useState } from 'react'
import Slider from 'react-slick';

interface settingTypes {
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

interface contextTypes {
    pages: {
        slickCurrentPage: number;
        slickCurrentPage1: number;
        slickCurrentPage2: number;
        slickCurrentPage3: number;
        slickCurrentPage4: number;
    };
    settings: {
        slickSetting: settingTypes;
        slickSetting1: settingTypes;
        slickSetting2: settingTypes;
        slickSetting3: settingTypes;
        slickSetting4: settingTypes;
    };
    prevInfiniteSlide: Function;
    nextInfiniteSlide: Function;
    prevSlide: Function;
    nextSlide: Function;
}

export const MainContext = createContext<contextTypes | undefined>(undefined);

export const MainProvider = ({children}: {children: ReactNode}) => {

    const [slickCurrentPage, setSlickCurrentPage] = useState(1);
    const [slickCurrentPage1, setSlickCurrentPage1] = useState(1);
    const [slickCurrentPage2, setSlickCurrentPage2] = useState(1);
    const [slickCurrentPage3, setSlickCurrentPage3] = useState(1);
    const [slickCurrentPage4, setSlickCurrentPage4] = useState(1);

    /* 슬라이드 세팅 */
    const slickSetting = {
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 1000,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage(nextSlide+1);
        }
    };

    const slickSetting1 = {
        autoplay: true,
        arrows: false,
        infinite: false,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage1(nextSlide+1);
        }
    };

    const slickSetting2 = {
        autoplay: true,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage2(Math.ceil(nextSlide / 2) + 1);
        }
    }

    const slickSetting3 = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: "custom-slick-dots",
        customPaging: (i:number) => {
            return (
                <span>{i}</span>
            )
        },
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage3(nextSlide+1);
        }
    }

    const slickSetting4 = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: "custom-slick-dots",
        customPaging: (i:number) => {
            return (
                <span>{i}</span>
            )
        },
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage4(nextSlide+1);
        }
    }

    /* 무한 슬라이드 */
    const prevInfiniteSlide = (target: React.RefObject<Slider>) => {
        target.current?.slickPrev();
    };

    const nextInfiniteSlide = (target: React.RefObject<Slider>) => {
        target.current?.slickNext();
    };

    /* 무한 슬라이드 x */
    const prevSlide = (target: React.RefObject<Slider>, currentPage: number) => {
        if(currentPage !== 1) {
            target.current?.slickPrev();
        }
    };

    const nextSlide = (target: React.RefObject<Slider>, currentPage: number) => {
        const maxLength = (target.current?.props?.children as React.ReactNode[] | undefined)?.length;
        
        if(currentPage !== maxLength) {
            target.current?.slickNext();
        }
    };

    const pages = {
        slickCurrentPage,
        slickCurrentPage1,
        slickCurrentPage2,
        slickCurrentPage3,
        slickCurrentPage4
    }

    const settings = {
        slickSetting,
        slickSetting1,
        slickSetting2,
        slickSetting3,
        slickSetting4
    }

    const contextValue = {
        pages,
        settings,
        prevInfiniteSlide,
        nextInfiniteSlide,
        prevSlide,
        nextSlide
    }

    return (
        <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
    )
}
