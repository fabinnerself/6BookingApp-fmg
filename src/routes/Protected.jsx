import React from 'react'
import { useAuth } from '../context/auth'
import { Navigate, Outlet } from 'react-router'

function Protected({children }) {
    const {isAuth}= useAuth()

    if(!isAuth){
        return <Navigate to="/login" />
    }
    return  children ? children : <Outlet />
}

export default Protected