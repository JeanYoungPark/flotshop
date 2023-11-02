import React from 'react'

export const ProductComponent = () => {
  return (
    <div className='container'>
        <div className='top'>
            <h1>PRODUCT</h1>
            <ul>
                <li><span>의류</span></li>
                <li><span>산책</span></li>
                <li><span>리빙</span></li>
            </ul>
        </div>
        <div className='content'>
            <div className='nav'></div>
            <ul>
                <li>
                    <div>이미지</div>
                    <div>설명</div>
                </li>
            </ul>
        </div>
    </div>
  )
}
