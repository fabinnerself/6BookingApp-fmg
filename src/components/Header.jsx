import React from 'react'
import Brand from './home/Brand'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='sticky top-0 z-10  bg-white  h-20 w-full shadow-lg '><div>
        <div className='max-w-5x1 mx-auto px-5 h-full flex items-center justify-center'>
        <div><Brand /></div>

        <div><Link to="/login">Iniciar Session</Link></div>
        </div>
     </div></div>
  )
}

export default Header