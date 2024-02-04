import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import { RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';

export const Menu = () => {
    const popup = useSelector((state: RootState) => state.userHeader.popup);
    const dispatch = useDispatch();

    return (
        <div id="menu" className={`${popup === 'menu' && 'active'}`}>
            <div className="close" onClick={() => dispatch({type: 'setPopup', popup: ''})}><RiCloseFill/></div>
            <div className="right">
                <div className="joinBenefit"><span> 회원 3,000P</span></div>
                <div className="menuList">
                    <ul>
                        <li>회원계정</li>
                        <li>장바구니</li>
                        <li>주문조회</li>
                        <li>마이쇼핑</li>
                    </ul>
                    <ul>
                        <li>즐겨찾기</li>
                        <li>바탕화면</li>
                        <li>사은품</li>
                        <li>최근상품</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}
