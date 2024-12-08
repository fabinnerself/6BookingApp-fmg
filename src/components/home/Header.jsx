import React from 'react'
import Brand from './Brand'
import { useAuth } from '../../context/auth'
import { Link } from 'react-router'
import { Text } from '../../containers/Language';

function Header() {
    const {isAuth} = useAuth()
    return (

    <div className='sticky top-0 bg-white h-20 w-full shadow-lg z-10'>
        <div className='max-w-5x1 mx-auto px-5 h-full flex items-center justify-between'>
        <Brand />
        <div>        
            {isAuth ?(<>                                           
                <button className='btn gb-red-500' onClick={logout}><Text tid="m_logout" /></button>            
                </>) :(<Link to="/login" ><Text tid="m_login" /></Link>)}
        </div>
         </div>
        </div>
    )  
}



export default Header