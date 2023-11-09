import React, { useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'
import img01 from 'assets/images/review/review_01.jpg'
import img2 from 'assets/images/review/bs_dummy_p_review.png'
import { Paging } from 'components/Paging'
import stars from 'assets/images/point5.gif'
import pd01 from 'assets/images/review/product_01.jpg'

export const ReviewComponent = () => {
    const sliderRef = useRef<Slider>(null);
    const [slickCurrentPage, setSlickCurrentPage] = useState(1);

    const slickSetting = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        dotsClass: "custom-slick-dots",
        customPaging: (i:number) => {
            return (
                <span>{i}</span>
            )
        },
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setSlickCurrentPage(nextSlide+1);
        }
    };

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

    return (
        <div className='wrapper'>
            <div className='top'>
                <h1>REVIEW</h1>
                <ul>
                    <li><span>전체</span></li>
                    <li className='active'><span>REVIEW</span></li>
                    <li><span>PHOTO REVIEW</span></li>
                </ul>
            </div>
            <div className="slides reviews">
                <div className={`arrow prev ${slickCurrentPage === 1 && 'disable'}`} onClick={() => prevSlide(sliderRef, slickCurrentPage)}><BsArrowLeft/></div>
                <div className={`arrow next ${slickCurrentPage === 3 && 'disable'}`} onClick={() => nextSlide(sliderRef, slickCurrentPage)}><BsArrowRight/></div>
                <Slider ref={sliderRef} {...slickSetting}>
                    {[1,2,3,4,5].map(() => {
                        return (
                            <div className="review">
                                <div className="wrap">
                                    <div className="img">
                                        <div style={{backgroundImage: `url('${img01}')`}}><img src={img2} alt="review"/></div>
                                    </div>
                                    <div className="description">
                                        <span className="title">좋아요</span>
                                        <span className="contents">반려견 이름 |고대박 견종 |미니핀 반려견 몸무게 |4.5 구매하신 사이즈 |M 후기 |너무좋아요</span>
                                        <span className="stars"><img src={stars} alt="5점"/></span>
                                    </div>
                                    <div className='product'>
                                        <span className='pdImg'><img src={pd01} alt="상품"/></span>
                                        <span className='title'>플로트 캔디패딩조끼 강아지옷 2컬러</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="review">
                        <div className="wrap">
                            <div className="img">
                                <div style={{backgroundImage: `url('')`}}><img src={img2} alt="review"/></div>
                            </div>
                            <div className="description">
                                <span className="title">좋아요좋아요좋아요좋아요좋아요좋아요좋아요</span>
                                <span className="contents">반려견 이름 |고대박 견종 |미니핀 반려견 몸무게 |4.5 구매하신 사이즈 |M 후기 |너무좋아요</span>
                                <span className="stars"><img src={stars} alt="5점"/></span>
                            </div>
                            <div className='product'>
                                <span className='pdImg'><img src={pd01} alt="상품"/></span>
                                <span className='title'>플로트 캔디패딩조끼 강아지옷 2컬러</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='board'>
                <h2 className='title'>모든 리뷰</h2>
                <div className='table'>
                    <table>
                        <colgroup>
                            <col style={{width: '70px'}}/>
                            <col style={{width: '180px'}}/>
                            <col style={{width: '100px'}}/>
                            <col style={{width: 'auto'}}/>
                            <col style={{width: '110px'}}/>
                            <col style={{width: '100px'}}/>
                            <col style={{width: '55px'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>PRODUCT</th>
                                <th>CATEGORY</th>
                                <th>SUBJECT</th>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>HIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3,4,5,6,7].map((i) => {
                                return (
                                    <tr>
                                        <td>{i}</td>
                                        <td className='product'>
                                            <p>
                                                <span className='pdImg'><img src={pd01} alt="img01"/></span>
                                                <span className='name'>플로트 베이직 하프넥티셔츠 옐로우 강아지옷</span>
                                            </p>
                                        </td>
                                        <td className='category'><span>REVIEW</span></td>
                                        <td className='subject'>
                                            <p>
                                                <span className='view'>VIEW</span>
                                                <span>좋아요!!</span>
                                            </p>
                                            <div className='img'><img src={img01} alt="product"/></div>
                                        </td>
                                        <td>신****</td>
                                        <td>2023-11-02</td>
                                        <td>33</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Paging/>
        </div>
    )
}
