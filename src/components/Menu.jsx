import React  from 'react'
import {cn} from '../utils/index'
import { IoMdClose } from "react-icons/io";

function Menu({ children , openMenu, closeMenu }) {
  return (
    <div className={cn('menu -top-full',openMenu && 'top-0')}>
       <button className='absolute top-3 right-5 p-1 md:hidden' onClick={closeMenu}>
        <IoMdClose className='size-5'/></button>
        {children}</div>
  )
}

export default Menu