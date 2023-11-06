import React from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

export const Paging = () => {
  return (
    <div id='paging'>
        <div className='arrow left'><MdArrowBackIos/></div>
        <ul className='number'>
            <li className='active'><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
        </ul>
        <div className='arrow right'><MdArrowForwardIos/></div>
    </div>
  )
}
