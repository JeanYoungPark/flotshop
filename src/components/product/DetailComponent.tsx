import React from 'react'
import detail01 from 'assets/images/product/detail/detail01.jpg'
import detail01_01 from 'assets/images/product/detail/detail01_01.jpg'
import { FaRegHeart } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'

export const DetailComponent = () => {
    return (
        <div className='wrapper'>
            <div className='left'>
                <div className='container'>
                    <div className='thumbnail'>
                        <div className='thumb'>
                            <div className='img'><img src={detail01} alt="thumbnail"/></div>
                            <div className='review'>
                                상품후기<span>1</span>
                            </div>
                            <div className='like'>
                                LIKE <strong>0</strong>
                            </div>
                        </div>
                        <ul className='thumbList'>
                            {[1,2,3,4,5].map(() => {
                                return (
                                    <li><img src={detail01_01} alt="디테일" /></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    <hr />
                    컨텐츠 영역
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <div>
                        <div className='head'>
                            <h2>플로트 데일리버튼티셔츠 레드 강아지옷</h2>
                            <p>26,000원</p>
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
