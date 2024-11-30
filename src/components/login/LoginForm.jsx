import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
    email:z.string().email(),
    password:z.string().min(6,{message:"Ingrese un password de "}),

})
 
 function LoginForm() {
    const {handleSubmit, register, formState: {errors} ,reset }= useForm({
        resolver:zodResolver(schema)
    })

    const onSubmit = (dataform) => {
        console.log(dataform)
    }

   return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label className='block font-semibold ' >E-mail</label>
        <input className='input-form' placeholder='ingresa tu correo' type="email" 
        {...register('email')}/>
        {errors.email && <span className='error-validation'>{errors.email.message}</span>}
        </div>
        <div className='mb-4'>
        <label htmlFor="">Password</label>
        <input className='input-form' type="password" 
        {...register('password')} />
        {errors.password && <span className='error-validation'>{errors.password.message}</span>}
        </div>
        <button className='btn w-full'>Iniciar session</button> 
        
    </form>
   )
 }
 
 export default LoginForm