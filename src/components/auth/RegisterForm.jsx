import React,  { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as z from 'zod'
import useAuth from '../../context/auth'
import { Text, LanguageContext } from '../../containers/Language';


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
  const { dictionary } = useContext(LanguageContext);

    const onSubmit = (dataform) => {

      toast.success(dictionary.l_s_succes ,{ 
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
        <label className='block font-semibold ' ><Text tid="l_firstName" /></label>
        <input className='input-form'           
          placeholder={dictionary.l_p_enterName}
          {...register('firstName')}/>
         </div>
         <div>
        {errors.firstName && <span className='error-validation block my-4'>{ errors.firstName.message}</span>}
        <label className='block font-semibold ' ><Text tid="l_lastName" /></label>
        <input className='input-form'           
          placeholder={dictionary.l_e_lastName} 
          {...register('lastName')}/>     
          {errors.lastName && <span className='error-validation block my-4'>{ errors.lastName.message}</span>} 
          </div>
         <div>
        <label className='block font-semibold ' ><Text tid="l_email" /></label>
        <input className='input-form' 
          placeholder={dictionary.l_p_enteremail} 
        {...register('email')}/>
        {errors.email && <span className='error-validation block my-4'>{ errors.email.message}</span>}
        </div>
        <div className='mb-4'>
        <label className='block font-semibold '><Text tid="l_password" /></label>
        <input className='input-form' type="password" 
          placeholder={dictionary.l_p_enterPass}           
        {...register('password')} />
        {errors.password && <span className='error-validation block my-4'>{errors.password.message}</span>}
        </div>
        <div className='mb-4'>
        <label className='block font-semibold '><Text tid="l_gender" /></label>
        <select className='input-form' {...register('gender')}>
            <option value=""><Text tid="l_genderSelect" /></option>            
          <option value="male"><Text tid="l_male" /></option>
          <option value="female"><Text tid="l_female" /></option>          
          <option value="other"><Text tid="l_other" /></option>
        </select>
        {errors.gender && <span className='error-validation block my-4'>{errors.gender.message}</span>}
        
        </div>        
        <button className='btn w-full'><Text tid="l_createAcc1" /> </button>         
    </form>
  )
}

export  default RegisterForm;