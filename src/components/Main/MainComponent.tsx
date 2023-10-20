import React, { useContext } from 'react'
import pd01 from '../../assets/images/mainBg02_1.jpg'; 
import pd02 from '../../assets/images/mainBg02_2.jpg';
import pd03 from '../../assets/images/mainBg02_3.jpg';
import pd04 from '../../assets/images/mainBg04_1.jpg';
import pt05 from '../../assets/images/point5.gif';
import pd06 from '../../assets/images/mainBg06_1.jpg';
import pd07 from '../../assets/images/mainBg07.png';
import { useCallback, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider  from "react-slick";
import { BsArrowLeft, BsArrowRight, BsSuitHeart, BsHandbag, BsWindowSplit } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Header } from '../Header';
import { CommonContext } from '../../context/CommonProvider';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { MainContext } from '../../context/MainProvider';

type Credits = {
    enabled?: boolean;
    position?: "left" | "right";
};

const credits: Credits = {
    enabled: true,
    position: "left",
};

export const MainComponent = () => {

    const commonData = useContext(CommonContext);
    const mainData = useContext(MainContext);

    const sliderRef = useRef<Slider>(null);
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);
    const sliderRef3 = useRef<Slider>(null);
    const sliderRef4 = useRef<Slider>(null);

    const leaveSection = useCallback((origin: any, destination: any, direction: any) => {
        if(destination.index === 0) {
            commonData?.handleHeaderColor(true);
        }else{
            commonData?.handleHeaderColor(false);
        }
    }, [commonData]);

  return (
    <>
        <Header/>
        <Search/>
        <Menu/>
        <ReactFullpage
            licenseKey = {'YOUR_KEY_HERE'}
            credits={credits}
            navigation={commonData?.commonPopup === ""}
            onLeave={leaveSection}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
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
                        <div className="section second">
                            <div className="content">
                                <div className="left">
                                    <div className="slides products">
                                        <div className={`arrow prev ${mainData?.pages.slickCurrentPage1 === 1 && 'disable'}`} onClick={() => mainData?.prevSlide(sliderRef1, mainData?.pages.slickCurrentPage1)}><BsArrowLeft/></div>
                                        <div className={`arrow next ${mainData?.pages.slickCurrentPage1 === 3 && 'disable'}`} onClick={() => mainData?.nextSlide(sliderRef1, mainData?.pages.slickCurrentPage1)}><BsArrowRight/></div>
                                        <Slider ref={sliderRef1} {...mainData?.settings.slickSetting1}>
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
                                            <span>{mainData?.pages.slickCurrentPage1}/3</span>
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
                                    <div className="box">
                                        <span>#인기상품</span>
                                        <h2>이달의 베스트</h2>
                                        <p>이번달 가장 많이 판매된 상품들 할인 이벤트 시작!</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="box">
                                        <h3>MONTH BEST</h3>
                                        <div className="slides products">
                                            <div className={`arrow prev ${mainData?.pages.slickCurrentPage2 === 1 && 'disable'}`} onClick={() => mainData?.prevSlide(sliderRef2, mainData?.pages.slickCurrentPage2)}><BsArrowLeft/></div>
                                            <div className={`arrow next ${mainData?.pages.slickCurrentPage2 === 3 && 'disable'}`} onClick={() => mainData?.nextSlide(sliderRef2, mainData?.pages.slickCurrentPage2)}><BsArrowRight/></div>
                                            <Slider ref={sliderRef2} {...mainData?.settings.slickSetting2}>
                                                <div className="product">
                                                    <div className="img">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                        <img src={pd01} alt="product 1"/>
                                                        <div className="discountRate">25% OFF</div>
                                                    </div>
                                                    <div className="timeSale">남은시간 1120일 03:24:16</div>
                                                    <div className="description">
                                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <span className="price line">30,000원</span>
                                                        <span className="discountPrice">22,500원 <span className="discount">(25%)</span></span>
                                                    </div>
                                                </div>
                                                <div className="product">
                                                    <div className="img">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                        <img src={pd01} alt="product 1"/>
                                                    </div>
                                                    <div className="description">
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                                        <span className="price">30,000원</span>
                                                    </div>
                                                </div>
                                                <div className="product">
                                                    <div className="img">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                        <img src={pd01} alt="product 1"/>
                                                    </div>
                                                    <div className="description">
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                                        <span className="price">30,000원</span>
                                                    </div>
                                                </div>
                                                <div className="product">
                                                    <div className="img">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                        <img src={pd01} alt="product 1"/>
                                                    </div>
                                                    <div className="description">
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                                        <span className="price">30,000원</span>
                                                    </div>
                                                </div>
                                                <div className="product">
                                                    <div className="img">
                                                        <span className="likes">Like <span className="count">0</span></span>
                                                        <div className="icons">
                                                            <BsSuitHeart/>
                                                            <BsHandbag />
                                                            <BsWindowSplit />
                                                        </div>
                                                        <img src={pd01} alt="product 1"/>
                                                    </div>
                                                    <div className="description">
                                                        <div className="reviewCount">리뷰 0</div>
                                                        <strong className="name">플로트X제로퍼제로 스탠다드 강아지 목줄&리드줄 세트 2COLOR</strong>
                                                        <span className="price">30,000원</span>
                                                    </div>
                                                </div>
                                            </Slider>
                                            <div className="custom-dot">
                                                <span>{mainData?.pages.slickCurrentPage2}/3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section fourth">
                            <div className="box">
                                <h2>프로덕트</h2>
                                <ul className="slides products">
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
                                <div className="viewAll"><span>모두 보기</span></div>
                            </div>
                        </div>
                        <div className="section fifth">
                            <div className="box">
                                <h2>상품 후기</h2>
                                <div className="slides products">
                                    <div className={`arrow prev ${mainData?.pages.slickCurrentPage3 === 1 && 'disable'}`} onClick={() => mainData?.prevSlide(sliderRef3, mainData?.pages.slickCurrentPage3)}><BsArrowLeft/></div>
                                    <div className={`arrow next ${mainData?.pages.slickCurrentPage3 === 3 && 'disable'}`} onClick={() => mainData?.nextSlide(sliderRef3, mainData?.pages.slickCurrentPage3)}><BsArrowRight/></div>
                                    <Slider ref={sliderRef3} {...mainData?.settings.slickSetting3}>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd04} alt="review"/></div>
                                                <div className="info">
                                                    <span className="title">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="contents">사무실 데리고갈때 입힐 출근복으로 샀는데 너무 단정하고 의젓해보이고 예뻐요ㅜㅜ</span>
                                                    <span className="starts"><img src={pt05} alt="5점"/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="viewAll"><span>모두 보기</span></div>
                            </div>
                        </div>
                        <div className="section sixth">
                            <div className="box">
                                <h2>이벤트 / 뉴스</h2>
                                <div className="slides events">
                                    <div className={`arrow prev ${mainData?.pages.slickCurrentPage4 === 1 && 'disable'}`} onClick={() => mainData?.prevSlide(sliderRef4, mainData?.pages.slickCurrentPage4)}><BsArrowLeft/></div>
                                    <div className={`arrow next ${mainData?.pages.slickCurrentPage4 === 3 && 'disable'}`} onClick={() => mainData?.nextSlide(sliderRef4, mainData?.pages.slickCurrentPage4)}><BsArrowRight/></div>
                                    <Slider ref={sliderRef4} {...mainData?.settings.slickSetting4}>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd06} alt="event"/></div>
                                                <div className="info">
                                                    <strong>추석맞이 20% 쿠폰 </strong>
                                                    <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd06} alt="event"/></div>
                                                <div className="info">
                                                    <strong>추석맞이 20% 쿠폰 </strong>
                                                    <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd06} alt="event"/></div>
                                                <div className="info">
                                                    <strong>추석맞이 20% 쿠폰 </strong>
                                                    <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="wrap">
                                                <div><img src={pd06} alt="event"/></div>
                                                <div className="info">
                                                    <strong>추석맞이 20% 쿠폰 </strong>
                                                    <p>추석맞이 전상품 20% 할인쿠폰<br/>09.20~25</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="viewAll"><span>모두 보기</span></div>
                            </div>
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
