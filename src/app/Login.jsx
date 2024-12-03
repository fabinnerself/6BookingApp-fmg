import React from 'react'
import { Link } from 'react-router'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <div>
      <h1 className='text-lg font-semibold mb-6'>
        Sign in with your account</h1>
     <LoginForm />
    <p className='mt-6 '>
      Do you need an account? {' '} 
      <Link className='text-blue-500 font-semibold' to="/register">
      Create an account</Link></p>
    </div>
  )
}

export  { Login }