import React from 'react'
import 'assets/css/main.css'
import 'assets/css/about.css'
import about01 from 'assets/images/about/about-img01.jpg'
import about02 from 'assets/images/about/about-img02.jpg'
import about03 from 'assets/images/about/about-img03.jpg'

export const IntroduceComponent = () => {
  return (
    <div className='wrapper'>
        <div className='top'>
            <h2>플로트</h2>
        </div>
        <div className='content'>
            <div className='pb-60'><img src={about01} alt="" /></div>
            <div className='info'>
                <h3>
                    <span>BETTER LIFE, BETTER ANSWER FOR YOUR PET</span><br/>
                    <span>반려동물의 더 나은 삶을 위한 더 나은 답을 찾습니다</span>
                </h3>
                <p>
                플로트는 우리의 가족이며 친구인 반려동물이 편안한 삶을 누리길 꿈꿉니다.<br/>
                반려동물이 더 편안하고 행복해질 수 있도록 플로트의 다양한 전문가들이 기본과 기능에 충실한 답을 찾아 제안합니다.
                </p>
            </div>
            <div className='before pb-60'><img src={about02} alt='' /></div>
            <div className='info'>
                <h3>
                    <span>반려동물 용품 전문 브랜드</span>
                </h3>
                <p>
                반려동물 상품 기획 개발 제조 유통을 위한 자체브랜드를 보유하고 있습니다.<br/>
                반려동물 용품 전문 브랜드 ‘플로트’와 반려동물 라이프스타일 스토어 ‘원테일’을 운영하고 있습니다.
                </p>
            </div>
            <div className='pb-60'><img src={about03} alt='' /></div>
            <ul className='history'>
                <li>
                    <h4>2023</h4>
                    <div>
                        (4월) '롯데마트'입점<br/>
                        (콜리올리 등 전국 50여개 매장 입점)
                    </div>
                    <div>
                        (3월) 미국 온/오프라인 총판<br/>
                        'FLOT USA'계약
                    </div>
                </li>
                <li>
                    <h4>2022</h4>
                    <div>
                        (2월) 국내 오프라인 총판<br/>
                        '모건네트웍스' 계약
                    </div>
                    <div>
                        (1월) GS25 납품 위탁<br/>
                        '어바웃펫' 계약
                    </div>
                </li>
                <li>
                    <h4>2021</h4>
                    <div>
                        (10월) 플로트 스탠다드 산책용품<br/>
                        컬렉션 출시
                    </div>
                    <div>(9월) '제로퍼제로'IP 획득 (아이코닉스)</div>
                    <div>
                        (6월) 반려동물 라이프스타일 온라인 쇼핑몰<br/>
                        [원테일] 오픈 (onetail.co.kr)
                    </div>
                </li>
                <li>
                    <h4>2020</h4>
                    <div>(2월) '쿠팡' 로켓배송 계약</div>
                    <div>
                        (2월) 직영매장 [원테일] 롯데백화점 인천터미널점 오픈<br/>
                        (현 영업종료)
                    </div>
                </li>
                <li>
                    <h4>2019</h4>
                    <div>(4월) 직영매장 [원테일] HDC아이파크몰 용산점 오픈</div>
                </li>
                <li>
                    <h4>2018</h4>
                    <div>
                        (4월) 메가코스바이오 협업 라세시앙<br/>
                        강아지영양제 크라우드펀딩
                    </div>
                    <div>
                        (2월) 무신사 협업 캡슐컬렉션 출시<br/>
                        (OiOi 키르시 크리틱 로맨틱크라운)
                    </div>
                </li>
                <li>
                    <h4>2017</h4>
                    <div>(9월) 텐바이텐 협업컬렉션 출시</div>
                    <div>(6월) 온라인 쇼핑몰 [플로트샵] 오픈 (flotshop.com)</div>
                    <div>(5월) 한국경제 주최 [2017대한민국 브랜드어워즈]</div>
                    <div>'대한민국 유망브랜드대상' 애견용품 부분 수상</div>
                    <div>(4월) 대통령직속 청년위원회 주최</div>
                    <div>[2017 K-스타일 청년창업 멘토링 지원사업] 우수상 수상</div>
                </li>
                <li>
                    <h4>2016</h4>
                    <div>
                        (12월) 대통령직속 청년위원회 & 네이버 주최<br/>
                        [e-커머스드림] '브랜드상' 수상
                    </div>
                    <div>(9월) 회사 설립 및 브랜드 런칭</div>
                </li>
            </ul>
        </div>
    </div>
  )
}
