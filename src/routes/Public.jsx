import React from 'react'
import { useAuth } from '../context/auth'
import { Navigate, Outlet } from 'react-router'

function Public({children}) {
  const { isAuth }= useAuth()

  if(isAuth){
      return <Navigate to="/" />
  }
  return  children ? children : <Outlet />
  
}

export default Public