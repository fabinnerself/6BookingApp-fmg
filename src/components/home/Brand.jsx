import React from 'react'
import { Link } from 'react-router'
import Logo from './Logo'

function Brand() {
  return (
    <Link to="/"  className='flex items-center gap-1' ><Logo className="w-10 h-10"  />
    <span className='text-4x1 font-semibold text-custom-blue'>Booking <span className='text-custom-green'>APP </span></span>
    </Link>
  )
}

export default Brand