import "../assets/css/common.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider  from "react-slick";
import { BsArrowLeft, BsArrowRight, BsSuitHeart, BsHandbag, BsWindowSplit, BsBag } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pd01 from '../assets/images/mainBg02_1.jpg'; 
import pd02 from '../assets/images/mainBg02_2.jpg';
import pd03 from '../assets/images/mainBg02_3.jpg';
import pd04 from '../assets/images/mainBg04_1.jpg';
import pt05 from '../assets/images/point5.gif';
import pd06 from '../assets/images/mainBg06_1.jpg';
import pd07 from '../assets/images/mainBg07.png';
import { useCallback, useRef, useState } from "react";

type Credits = {
    enabled?: boolean;
    position?: "left" | "right";
};

const credits: Credits = {
    enabled: true,
    position: "left",
};

export const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => {
            setCurrentPage(next + 1); // 페이지 변경 시 현재 페이지 업데이트
        }
    };

    const slickSettings3 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
    }

    const prevSlide = useCallback(() => {
        if(currentPage !== 1) sliderRef.current?.slickPrev(); 
    }, [currentPage]);

    const nextSlide = useCallback(() => {
        if(currentPage !== 3) sliderRef.current?.slickNext();
    }, [currentPage]);

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
                    <span><RiSearch2Line/></span>
                    <span><BsBag/></span>
                    <span><RiMenuFill/></span>
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
                            <div className="section second">
                                <div className="content">
                                    <div className="left">
                                        <div className="products">
                                            <div className={`arrow prev ${currentPage === 1 && 'disable'}`} onClick={prevSlide}><BsArrowLeft/></div>
                                            <div className={`arrow next ${currentPage === 3 && 'disable'}`} onClick={nextSlide}><BsArrowRight/></div>
                                            <Slider ref={sliderRef} {...settings}>
                                                <div className="product">
                                                    <div className="description">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <>
                                                            <div className="reviewCount">리뷰 0</div>
                                                            <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                                                            <span className="brand">FLOT</span>
                                                            <span className="price">26,000원</span>
                                                        </>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                    </div>
                                                    <img src={pd01} alt="product 1"/>
                                                </div>
                                                <div className="product"><img src={pd02} alt="product 2"/></div>
                                                <div className="product"><img src={pd03} alt="product 3"/></div>
                                            </Slider>
                                            <div className="custom-dot">
                                                <span>{currentPage}/3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <span>#플로트 F/W 추천</span>
                                        <h2>견체공학으로 편안한</h2>
                                        <p>
                                            플로트의 견체공학으로 편안한<br/>
                                            간절기에 딱 좋은 스타일을 추천합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="section third">
                                <div className="content">
                                    <div className="left">
                                        <span>#인기상품</span>
                                        <h2>이달의 베스트</h2>
                                        <p>이번달 가장 많이 판매된 상품들 할인 이벤트 시작!</p>
                                    </div>
                                    <div className="right"></div>
                                </div>
                            </div>
                            <div className="section fourth">
                                <h2>프로덕트</h2>
                                <>
                                    <ul className="products">
                                        <li className="product">
                                            <div className="description">
                                                <span className="likes">Like <span className="count">0</span></span>
                                                <>
                                                    <div className="reviewCount">리뷰 0</div>
                                                    <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                                                    <span className="brand">FLOT</span>
                                                    <span className="price">26,000원</span>
                                                </>
                                                <div className="icons">
                                                    <BsSuitHeart/>
                                                    <BsHandbag />
                                                    <BsWindowSplit />
                                                </div>
                                            </div>
                                            <img src={pd01} alt="product 1"/>
                                        </li>
                                        <li className="product">
                                            <div className="description">
                                                <span className="likes">Like <span className="count">0</span></span>
                                                <>
                                                    <div className="reviewCount">리뷰 0</div>
                                                    <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                                                    <span className="brand">FLOT</span>
                                                    <span className="price">26,000원</span>
                                                </>
                                                <div className="icons">
                                                    <BsSuitHeart/>
                                                    <BsHandbag />
                                                    <BsWindowSplit />
                                                </div>
                                            </div>
                                            <img src={pd01} alt="product 1"/>
                                        </li>
                                        <li className="product">
                                            <div className="description">
                                                <span className="likes">Like <span className="count">0</span></span>
                                                <>
                                                    <div className="reviewCount">리뷰 0</div>
                                                    <strong className="name">플로트 데일리버튼티셔츠 레드 강아지옷</strong>
                                                    <span className="brand">FLOT</span>
                                                    <span className="price">26,000원</span>
                                                </>
                                                <div className="icons">
                                                    <BsSuitHeart/>
                                                    <BsHandbag />
                                                    <BsWindowSplit />
                                                </div>
                                            </div>
                                            <img src={pd01} alt="product 1"/>
                                        </li>
                                    </ul>
                                    <div className="viewAll">모두 보기</div>
                                </>
                            </div>
                            <div className="section fifth">
                                <h2>상품 후기</h2>
                                <div className="reviews">
                                    <div className={`arrow prev ${currentPage === 1 && 'disable'}`} onClick={prevSlide}><BsArrowLeft/></div>
                                    <div className={`arrow next ${currentPage === 3 && 'disable'}`} onClick={nextSlide}><BsArrowRight/></div>
                                    <Slider {...slickSettings3}>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                        <div className="review">
                                            <div><img src={pd04} alt="review"/></div>
                                            <div className="info">
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span>사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                <span><img src={pt05} alt="5점"/></span>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="viewAll">모두 보기</div>
                            </div>
                            <div className="section sixth">
                                <h2>이벤트 / 뉴스</h2>
                                <div className="events">
                                    <div className={`arrow prev ${currentPage === 1 && 'disable'}`} onClick={prevSlide}><BsArrowLeft/></div>
                                    <div className={`arrow next ${currentPage === 3 && 'disable'}`} onClick={nextSlide}><BsArrowRight/></div>
                                    <Slider {...slickSettings3}>
                                        <div className="event">
                                            <div><img src={pd06} alt="event"/></div>
                                            <div className="info">
                                                <span>추석맞이 20% 쿠폰 </span>
                                                <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="viewAll">모두 보기</div>
                            </div>
                            <div className="section seventh">
                                <div className="box">
                                    <h2>인스타그램<span className="subTitle">@flot_official</span></h2>
                                    <div className="feed"><img src={pd07} alt="feed" /></div>
                                </div>
                            </div>
                            <div className="section eighth">
                                <div className="box">
                                    <h2>플로트</h2>
                                    <p>반려동물의 더 나은 삶을 위한 더 나은 답을 찾습니다.</p>
                                    <span>#플로트 #견체공학</span>
                                    <div className="more">MORE</div>
                                </div>
                            </div>
                            <div className="section footer">
                                <div className="box">
                                    <div>
                                        <div className="cs">
                                            <h3>고객센터</h3>
                                            <div className="call">070-7699-1292<span>am 10:00 ~ pm 5:00</span></div>
                                            <div className="account">우리은행 1005-203-044995 박진욱(플로트)</div>
                                        </div>
                                        <ul className="utilMenu">
                                            <li>B2B 사업자 쇼핑몰</li>
                                            <li>이용안내</li>
                                            <li>쇼핑몰 이용약관</li>
                                            <li>개인정보처리방침</li>
                                        </ul>
                                    </div>
                                    <div className="copyright">Copyright © <strong>FLOTSHOP:플로트</strong>. All rights reserved.</div>
                                    <div>
                                        <ul className="sns">
                                            <li className="youtube"><FaYoutube/></li>
                                            <li className="instagram"><FaInstagram/></li>
                                            <li className="facebook"><FaFacebookF/></li>
                                        </ul>
                                        <p className="address">
                                            <span>플로트 </span><span>대표 : 박진욱</span><span>사업자번호 : [172-48-00160]</span><br />
                                            <span>통신판매신고 : 제 2022-서울금천-2145 호</span> <span>[사업자정보확인]</span><br />
                                            <span>주소 : 08592 서울특별시 금천구 가산디지털2로 34 (가산동) 8층 818호 (G밸리 더리브스마트타워)</span><br />
                                            <span>전화 : 070-7699-1292</span> <span>CPO : <a href="mailto:flotshop.service@gmail.com">박진욱(flotshop.service@gmail.com)</a></span> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    )
}
