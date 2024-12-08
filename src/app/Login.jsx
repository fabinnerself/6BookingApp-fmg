import React from 'react'
import { Link } from 'react-router'
import LoginForm from '../components/auth/LoginForm'
import { Text } from '../containers/Language';

function Login() {
  return (
    <div className='p-11 bg-slate-400  rounded-md shadow-xl'>
      <h1 className='text-lg font-semibold mb-6'>
      <Text tid="l_signin" /></h1>
     <LoginForm />
    <p className='mt-6 '>
    <Text tid="l_needAccount" /> {' '} 
      <Link className='text-blue-500 font-semibold' to="/register">
      <Text tid="l_create" /></Link></p>
    </div>
  )
}

export  { Login }