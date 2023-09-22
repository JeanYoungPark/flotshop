import "../assets/css/common.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider  from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pd01 from '../assets/images/mainBg02_1.jpg'; 
import pd02 from '../assets/images/mainBg02_2.jpg'; 
import { useState } from "react";

export const Main = () => {
    type Credits = {
        enabled?: boolean;
        position?: "left" | "right";
    };

    const credits: Credits = {
        enabled: true,
        position: "left",
    };      

    const [currentPage, setCurrentPage] = useState(1);

    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => {
            setCurrentPage(next + 1); // 페이지 변경 시 현재 페이지 업데이트
        },
      };

    return (
        <>
            <nav id="header">
                <h1 className="logo">logo</h1>
                <ul className="menu">
                    <li>
                        <span>의류</span>
                        <dl className="subMenu">
                            <dt><span>전체상품</span></dt>
                            <dt><span>민소매/나시</span></dt>
                            <dt><span>티셔츠</span></dt>
                            <dt><span>후드</span></dt>
                            <dt><span>아우터</span></dt>
                            <dt><span>악세사리</span></dt>
                        </dl>
                    </li>
                    <li><span>산책</span></li>
                    <li><span>리빙</span></li>
                    <li><span>EVENT</span></li>
                    <li><span>COLLECTION</span></li>
                    <li>
                        <span>COMMUNITY</span>
                        <dl className="subMenu">
                            <dt><span>공지사항</span></dt>
                            <dt><span>자주묻는질문</span></dt>
                            <dt><span>협업문의</span></dt>
                            <dt><span>상품후기</span></dt>
                            <dt><span>문의하기</span></dt>
                        </dl>
                    </li>
                    <li>
                        <span>ABOUT</span>
                        <dl className="subMenu">
                            <dt><span>회사소개</span></dt>
                            <dt><span>영상소개</span></dt>
                            <dt><span>오프라인 스토어</span></dt>
                        </dl>
                    </li>
                </ul>
                <div className="icons">
                    <span>돋보기</span>
                    <span>장바구니</span>
                    <span>메뉴</span>
                </div>
            </nav>
            <ReactFullpage
                licenseKey = {'YOUR_KEY_HERE'}
                credits={credits}
                navigation
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">1</div>
                            <div className="section">
                                <div className="secContent">
                                    <div className="left">
                                        <div className="products">
                                            <div className="arrow prev"><BsArrowLeft/></div>
                                            <Slider {...settings}>
                                                <div className="product">
                                                    <div className="description">
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                                                        <span className="brand">FLOT</span>
                                                        <span className="price">26,000원</span>
                                                        <div className="icons">

                                                        </div>
                                                    </div>
                                                    <img src={pd01} alt="product 1"/>
                                                </div>
                                                <div className="product"><img src={pd02} alt="product 2"/></div>
                                            </Slider>
                                            <div className="arrow next"><BsArrowRight/></div>
                                        </div>
                                        <div className="custom-dot">
                                            {currentPage}/3
                                        </div>
                                    </div>
                                    <div className="right">2</div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    )
}
