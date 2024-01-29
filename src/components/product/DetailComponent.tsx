import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { useQuery } from 'react-query'
import { productApi } from 'api/product'

type componentType = {
    productId?: string
}

export const DetailComponent: React.FC<componentType> = ({productId}) => {
    const [mainThumb, setMainThumb] = useState("");
    const [guideType, setGuideType] = useState<string>("");
    const [review, setReview] = useState<string>("");
    const [elPosition, setElPosition] = useState<'static'| 'fixed'>('static');

    const { data } = useQuery('product', () => productApi(productId), {
        onSuccess: (data) => {
            setMainThumb(data.images[0]?.url);
        }
    });

    const renderImages = () => {
        const imagesHtml = [];

        for(let i = 0; i < 5; i++) {
            if(data?.images[i]?.url){
                imagesHtml.push(<li onMouseOver={() => handleMouseOver(data.images[i].url)}><img src={data.images[i].url} alt={`product ${i}`}/></li>)
            }
        }

        return imagesHtml;
    }

    const handleMouseOver = (url: string) => {
        setMainThumb(url)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0) {
                setElPosition('static');
            }else{
                setElPosition('fixed');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    
    return (
        <div className='wrapper'>
            <div className='left'>
                <div className='container'>
                    <div className='thumbnail'>
                        <div className='thumb'>
                            <div className='img'><img src={mainThumb} alt="thumbnail"/></div>
                            <div className='review'>
                                상품후기<span>1</span>
                            </div>
                            <div className='like'>
                                LIKE <strong>{data?.likes}</strong>
                            </div>
                        </div>
                        <ul className='thumbList'>
                            {renderImages()}
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    <hr />
                    {data?.description}
                </div>
                <div className='guide'>
                    <div className='title'>
                        <h2>GUIDE</h2>
                        <span>배송/교환/반품</span>
                    </div>
                    <ul>
                        <li className='payment' onClick={() => setGuideType('payment')}>
                            <h3>결제 안내</h3>
                            <div className={`${guideType === 'payment' && 'on'}`}>
                            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다. <br/><br/>
                            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.<br/>
                            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
                            </div>
                        </li>
                        <li className='shipping' onClick={() => setGuideType('shipping')}>
                            <h3>배송 안내</h3>
                            <div className={`${guideType === 'shipping' && 'on'}`}>
                            배송 방법 : 택배<br/>
                            배송 지역 : 전국지역<br/>
                            배송 비용 : 3,000원<br/>
                            배송 기간 : 2일 ~ 7일<br/>
                            배송 안내 : 배송 업체 : CJ대한통운 (1588-1255)<br/>
                            - 조건부 무료배송(기본배송비 3,000원, 결제금액 4만원 이상 시 무료배송) 이며 , 제주도 및 산간지방의 경우 추가 배송비 3,000원이 부과됩니다.<br/>
                            - 빠른 배송을 위해 오후 2시 이전 결제 완료된 주문 건에 한해 당일 발송처리되며, 오전 10시 이후 결제 완료된 주문 건에 대해서는 다음날 발송됩니다.<br/>
                            - 배송 기간은 주문 결제 후 1~3일 정도 소요되며, 연휴 및 공휴일에는 지연될 수 있습니다.<br/>
                            - 일부 도서 산간지역, 제주도의 경우 항공료 및 도선료의 추가 배송비(3,000원)가 추가됩니다.<br/>
                            - 예약 / 수입 / 맞춤 상품의 경우 배송기간이 다소 지연될 수 있으며 배송지가 지방일 경우 예정된 시일보다 조금 더 소요될 수 있는 점 양해 부탁드립니다.
                            </div>
                        </li>
                        <li className='exchange' onClick={() => setGuideType('exchange')}>
                            <h3>교환 및 반품 안내</h3>
                            <div className={`${guideType === 'exchange' && 'on'}`}>
                            교환 및 반품이 불가능한 경우<br/><br/>
                            ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.
                            (색상 교환, 사이즈 교환 등 포함)
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='reviews'>
                    <div className='title'>
                        <h2>REVIEW</h2>
                        <span>상품후기</span>
                    </div>
                    <table>
                        <colgroup>
                            <col style={{width: "70px"}}></col>
                            <col style={{width: "auto"}}></col>
                            <col style={{width: "140px"}}></col>
                            <col style={{width: "120px"}}></col>
                            <col style={{width: "80px"}}></col>
                        </colgroup>
                        <tr className='record' onClick={() => setReview('review1')}>
                            <td>4</td>
                            <td className='subject'>이것만 품절이여서 내내 기다리다 간신히 샀어요ㅎㅎ</td>
                            <td>image</td>
                            <td>네****</td>
                            <td>2023-11-25</td>
                        </tr>
                        <tr className={`read ${review === 'review1' && 'on'}`}>
                            <td colSpan={5}>애기들 내복스타일로 사주고싶어서 샀는데 사진하고 동일해요 너무너무 귀여워용 ㅠㅠㅠ 때탈까봐 조금 걱정되긴 하지만 현재까지는 괜찮습니다 사이즈도 잘맞아요</td>
                        </tr>
                        <tr className='record' onClick={() => setReview('review2')}>
                            <td>4</td>
                            <td className='subject'>이것만 품절이여서 내내 기다리다 간신히 샀어요ㅎㅎ</td>
                            <td>image</td>
                            <td>네****</td>
                            <td>2023-11-25</td>
                        </tr>
                        <tr className={`read ${review === 'review2' && 'on'}`}>
                            <td colSpan={5}>애기들 내복스타일로 사주고싶어서 샀는데 사진하고 동일해요 너무너무 귀여워용 ㅠㅠㅠ 때탈까봐 조금 걱정되긴 하지만 현재까지는 괜찮습니다 사이즈도 잘맞아요</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <div style={{position: `${elPosition}`}}>
                        <div className='head'>
                            <h2>{data?.title}</h2>
                            <p>{data?.price}원</p>
                        </div>
                        <div className='info'>
                            <table>
                                <colgroup>
                                    <col style={{width: '115px'}} />
                                    <col style={{width: 'auto'}} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td>배송비</td>
                                        <td>3,000원 (40,000원 이상 구매 시 무료)</td>
                                    </tr>
                                    <tr>
                                        <td>SIZE</td>
                                        <td>
                                            <select>
                                                <option>- [필수] 옵션을 선택해 주세요 -</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='price'>
                            <strong>TOTAL</strong>:<span className='total'><em>0</em> (0개)</span>
                        </div>
                        <div className='buttons'>
                            <button className='submit'><span>구매하기</span></button>
                            <span className='icon cart'><GrCart/></span>
                            <span className='icon heart'><FaRegHeart/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
