import Slider from 'react-slick'

/* 무한 슬라이드 */
export const prevInfiniteSlide = (target: React.RefObject<Slider>) => {
    target.current?.slickPrev();
};

export const nextInfiniteSlide = (target: React.RefObject<Slider>) => {
    target.current?.slickNext();
};

/* 무한 슬라이드 x */
export const prevSlide = (target: React.RefObject<Slider>, currentPage: number) => {
    if(currentPage !== 1) {
        target.current?.slickPrev();
    }
};

export const nextSlide = (target: React.RefObject<Slider>, currentPage: number) => {
    const maxLength = (target.current?.props?.children as React.ReactNode[] | undefined)?.length;
    
    if(currentPage !== maxLength) {
        target.current?.slickNext();
    }
};