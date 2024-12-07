import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as z from 'zod'
import { useAuth } from '../../context/auth'


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
 
        toast.success('👤Login Successful👤!',{ 
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light"
        });

        login(dataform);
        
        navigate("/") 
        
        reset();

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