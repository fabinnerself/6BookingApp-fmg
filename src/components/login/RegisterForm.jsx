import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),    
  email:z.string().email(),
  password:z.string().min(6,{message:"Ingrese un password de almenos 6 characteres "}),
  gender: z.enum(["male,","female","other"],{message:"Select a gender"})
})

function RegisterForm() {
  const {handleSubmit, register, formState: {errors} ,reset }= useForm({
    resolver:zodResolver(schema)
    })

    const onSubmit = (dataform) => {
        console.log(dataform)
    }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
        <label className='block font-semibold ' >First Name</label>
        <input className='input-form' placeholder='ingresa tu correo'  
        {...register('firstName')}/>
         </div>
         <div>
        {errors.firstName && <span className='error-validation block my-4'>{ errors.firstName.message}</span>}
        <label className='block font-semibold ' >Last Name</label>
        <input className='input-form' placeholder='ingresa tu correo'  
        {...register('lastName')}/>     
          {errors.lastName && <span className='error-validation block my-4'>{ errors.email.lastName}</span>} 
          </div>
         <div>
        <label className='block font-semibold ' >E-mail</label>
        <input className='input-form' placeholder='first name' 
        {...register('email')}/>
        {errors.email && <span className='error-validation block my-4'>{ errors.email.message}</span>}
        </div>
        <div className='mb-4'>
        <label className='block font-semibold '>Password</label>
        <input className='input-form' type="password" placeholder='Ingresa tu contraseña'
        {...register('password')} />
        {errors.password && <span className='error-validation block my-4'>{errors.password.message}</span>}
        </div>
        <div className='mb-4'>
        <label className='block font-semibold '>Gender</label>
        <select className='block font-semibold' {...register('password')}>
            <option value="">Select a gender</option>
            <option value="">Select a genre</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.password && <span className='error-validation block my-4'>{errors.password.message}</span>}
        
        </div>        
        <button className='btn w-full'>Create account</button>         
    </form>
  )
}

export  default RegisterForm;