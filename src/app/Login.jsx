import React from 'react'
import { Link } from 'react-router'
import LoginForm from '../components/login/LoginForm'

function Login() {
  return (
    <div>
      <h1>Iniciar session con tu cuenta</h1>
     <LoginForm />
    <p>Necesitas una cuenta? <Link to="/register">Crear una cuenta</Link></p>
    </div>
  )
}

export  { Login}