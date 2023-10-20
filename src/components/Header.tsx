import React, { useContext } from 'react';
import { BsBag } from "react-icons/bs";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";
import { CommonContext } from 'contexts/CommonProvider';

export const Header = () => {
    const CommonData = useContext(CommonContext);

    return (
        <nav id="header" className={`${CommonData?.headerColor && 'active'}`}>
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
                <span onClick={() => CommonData?.handleCommonPopup("search")}><RiSearch2Line/></span>
                <span><BsBag/></span>
                <span onClick={() => CommonData?.handleCommonPopup("menu")}><RiMenuFill/></span>
            </div>
        </nav>
    )
}
