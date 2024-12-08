import React from 'react'
import { Link } from 'react-router'
import useAuth from '../../context/auth'
import { RiHomeGearFill } from "react-icons/ri";
import { Text } from '../../containers/Language';

function Nav() {
    const {isAuth,logout} = useAuth()

  return (
    <div className='grid place-content-center py-5 '>
      <div className='flex flex-col md:flex-row items-center gap-6'>
     
        {isAuth ?(<>
        <Link to = "/reservations" className='nav-link'>
        <Text tid="m_reservations" /></Link>
          <Link to="/config" className='nav-link' >
          <RiHomeGearFill className='size-6' /></Link>
          <button className='btn bg-red-500' onClick={logout}> <Text tid="m_logout" /></button>
            
          </>) :(<>
            <Link to="/config" className='nav-link' >
            <RiHomeGearFill className='size-6' /></Link>
            
          <Link to="/login" className='nav-link' >
          <Text tid="m_login" /></Link>

          <Link to="/register" className='nav-link' >
          <Text tid="m_register" /></Link> 
          </>
        )}
         
      </div>
    </div>
  )
}

export default Nav