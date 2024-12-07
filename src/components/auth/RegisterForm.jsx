import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as z from 'zod'
import useAuth from '../../context/auth'


const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),    
  email:z.string().email(),
  password:z.string().min(6,{message:"Ingrese un password de al menos 6 characteres "}),
  gender: z.enum(["male","female","other"],{message:"Select a gender"})
})

function RegisterForm() {
  const {register:createUser} = useAuth()
  const navigate = useNavigate()
  const {handleSubmit, register, formState: {errors} ,reset }= useForm({
    resolver:zodResolver(schema)
    })

    const onSubmit = (dataform) => {

      toast.success('👤 User registered corectly 👤!',{ 
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
      });

      console.log(dataform)
      createUser(dataform)
      reset()
      navigate("/login")
    }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
        <label className='block font-semibold ' >First Name</label>
        <input className='input-form' placeholder='ingresa tu primer nombre'  
        {...register('firstName')}/>
         </div>
         <div>
        {errors.firstName && <span className='error-validation block my-4'>{ errors.firstName.message}</span>}
        <label className='block font-semibold ' >Last Name</label>
        <input className='input-form' placeholder='ingresa apellido'  
        {...register('lastName')}/>     
          {errors.lastName && <span className='error-validation block my-4'>{ errors.lastName.message}</span>} 
          </div>
         <div>
        <label className='block font-semibold ' >E-mail</label>
        <input className='input-form' placeholder='ingresa tu email' 
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
        <select className='input-form' {...register('gender')}>
            <option value="">Select a gender</option>            
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className='error-validation block my-4'>{errors.gender.message}</span>}
        
        </div>        
        <button className='btn w-full'>Create account</button>         
    </form>
  )
}

export  default RegisterForm;