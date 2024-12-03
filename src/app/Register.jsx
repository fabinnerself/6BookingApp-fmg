import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { Link } from 'react-router'


function Register() {
  return (
    <div>
      <h1 className='text-lg font-semibold mb-6'>Create an Accout</h1>
      <RegisterForm />
      <p className='mt-6'>
        Do you already have an account? {' '}
        <Link className='text-blue-500 font-semibold' to="/login">Sign in!</Link>
        
      </p>
      </div>
  )
}

export { Register }