import React, { useContext, useEffect } from 'react';
import { BsBag } from "react-icons/bs";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { categoryMenuApi } from 'api/common';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

type categoryType = {
    id: number;
    title: string;
    subCategory: { category_id: number, title: string, id: number }[]
}

export const Header = (props: { headerType : string }) => {
    const color = useSelector((state: RootState) => state.userHeader.color);
    const dispatch = useDispatch();
    const { data: categoryData } = useQuery('category', categoryMenuApi,{ initialData: [] });
    
    const renderCategoryList = (categoryData || []).map((data: categoryType, index: number) => (
        <li key={index}>
            <span><Link to="">{data.title}</Link></span>
            { data.subCategory.length > 0 && (
                <dl className="subMenu">
                    {data.subCategory.map((subData, subIndex) => (
                        <dt key={subIndex}><span><Link to="">{subData.title}</Link></span></dt>
                    ))}
                </dl>
            )}
        </li>
    ))

    const handlePopup = (txt: string) => {
        dispatch({type: 'setPopup', popup: txt});
    }

    return (
        <nav id="header" className={`${props.headerType} ${color && 'active'}`}>
            <h1 className="logo"><Link to="/">logo</Link></h1>
            <ul className="menu">
                {renderCategoryList}
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
                <span onClick={() => handlePopup("search")}><RiSearch2Line/></span>
                <span><BsBag/></span>
                <span onClick={() => handlePopup("menu")}><RiMenuFill/></span>
            </div>
        </nav>
    )
}
