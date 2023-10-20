import React, { useContext } from 'react'
import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import { CommonContext } from 'contexts/CommonProvider';

export const Search = () => {
    const CommonData = useContext(CommonContext);

    return (
        <div id="search" className={`${CommonData?.commonPopup === 'search' && 'active'}`}>
                <div className="close" onClick={() => CommonData?.handleCommonPopup("")}><RiCloseFill/></div>
                <div className="left"><strong>어떤 상품을 찾으시나요?</strong></div>
                <div className="right">
                    <div className="box">
                        <fieldset>
                            <p>
                                <input type="text" placeholder="검색어 입력" />
                                <span><RiSearchLine/></span>
                            </p>
                        </fieldset>
                        <div className="txt">검색어 입력후에 엔터를 누르세요.</div>
                    </div>
                </div>
            </div>
    )
}
