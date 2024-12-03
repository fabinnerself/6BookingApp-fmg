import React from 'react'
import { Outlet } from 'react-router'
import Brand from '../components/home/Brand'

export default function AuthLayout() {
  return (
    <div className='grid place-content-center min-h-[100-dvh] py-12'>
      <div className='mb-6'><Brand /></div>
       
      <Outlet /> </div>
  )
}
