import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { Link } from 'react-router'
import { Text  } from '../containers/Language';


function Register() {
  return (
    <div className='p-11 bg-slate-400  rounded-md shadow-xl'>
      <h1 className='text-lg font-semibold mb-6'><Text tid="l_createAcc" /></h1>
      <RegisterForm />
      <p className='mt-6'>
      <Text tid="l_alreadyAcc" />{' '}
        <Link className='text-blue-500 font-semibold' to="/login"> <Text tid="l_signin1" /></Link>
        
      </p>
      </div>
  )
}

export { Register }