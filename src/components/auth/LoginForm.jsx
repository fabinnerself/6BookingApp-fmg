import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router'

const schema = z.object({
    email:z.string().email(),
    password:z.string().min(1,{message:"Ingrese un password de almenos 6 characteres "}),

})
 
 function LoginForm() {
    const {login} = useAuth()
    const navigate = useNavigate()
    const {handleSubmit, register, formState: {errors} ,reset }= useForm({
        resolver:zodResolver(schema)
    })

    const onSubmit = (dataform) => {
        console.log(dataform)
        login(dataform)
        reset()
        navigate("/")
    }

   return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
        <label className='block font-semibold ' >E-mail</label>
        <input className='input-form' placeholder='ingresa tu correo' type="email" 
        {...register('email')}/>
        {errors.email && <p className='error-validation'>{ errors.email.message}</p>}
        </div>
        <div className='mb-4'>
        <label className='block font-semibold '>Password</label>
        <input className='input-form' type="password" placeholder='Ingresa tu contraseña'
        {...register('password')} />
        {errors.password && <p className='error-validation'>{errors.password.message}</p>}
        </div>
        <button className='btn w-full'>Iniciar session</button>         
    </form>
   )
 }
 
 export default LoginForm