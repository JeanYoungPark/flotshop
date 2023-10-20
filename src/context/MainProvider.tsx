import React, { ReactNode, createContext } from 'react'
import Slider from 'react-slick';

interface contextTypes {
    prevInfiniteSlide: Function;
    nextInfiniteSlide: Function;
    prevSlide: Function;
    nextSlide: Function;
}

export const MainContext = createContext<contextTypes | undefined>(undefined);

export const MainProvider = ({children}: {children: ReactNode}) => {

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

    const contextValue = {
        prevInfiniteSlide,
        nextInfiniteSlide,
        prevSlide,
        nextSlide
    }

    return (
        <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
    )
}
