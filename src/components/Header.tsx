import React, { useContext } from 'react';
import { BsBag } from "react-icons/bs";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";
import { CommonContext } from 'contexts/CommonProvider';
import { Link } from 'react-router-dom';


export const Header = (props: { headerType : string }) => {
    const CommonData = useContext(CommonContext);
    
    return (
        <nav id="header" className={`${props.headerType} ${CommonData?.headerColor && 'active'}`}>
            <h1 className="logo"><Link to="/">logo</Link></h1>
            <ul className="menu">
                <li>
                    <span><Link to="/products">의류</Link></span>
                    <dl className="subMenu">
                        <dt><span><Link to="">민소매/나시</Link></span></dt>
                        <dt><span><Link to="">티셔츠</Link></span></dt>
                        <dt><span><Link to="">후드</Link></span></dt>
                        <dt><span><Link to="">아우터</Link></span></dt>
                        <dt><span><Link to="">악세사리</Link></span></dt>
                    </dl>
                </li>
                <li><span><Link to="">산책</Link></span></li>
                <li><span><Link to="">리빙</Link></span></li>
                <li><span><Link to="/events">EVENT</Link></span></li>
                <li><span><Link to="/collections">COLLECTION</Link></span></li>
                <li>
                    <span>COMMUNITY</span>
                    <dl className="subMenu">
                        <dt><span><Link to="/board/notice">공지사항</Link></span></dt>
                        <dt><span><Link to="/board/faq">자주묻는질문</Link></span></dt>
                        <dt><span><Link to="/board/review">상품후기</Link></span></dt>
                        <dt><span><Link to="/board/qna">문의하기</Link></span></dt>
                    </dl>
                </li>
                <li>
                    <span>ABOUT</span>
                    <dl className="subMenu">
                        <dt><span><Link to="/about/introduce">회사소개</Link></span></dt>
                        <dt><span><Link to="/about/videoIntroduce">영상소개</Link></span></dt>
                        <dt><span><Link to="/about/offline">오프라인 스토어</Link></span></dt>
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
