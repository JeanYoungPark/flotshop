import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer">
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
  )
}
