import { Input } from 'postcss'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { cn } from '../../utils'

const schema = z.object({
    checkIn: z.string().min(1,{message:"CheckIn is required"}),
    checkOut:z.string().min(1,{message:"CheckOut is required"})
})


function Reservations({ hotelId }) {

    const {handleSubmit, register, formState: {errors  }, reset} = useForm({ 
        resolver: zodResolver(schema)})

    const onSubmit = (dataForm) => {
        dataForm.hotelId = hotelId 
        console.log(dataForm);        
        reset()
    }

    console.log(errors);    

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='flex gap-2 items-center justify-center  mb-4 '>
            <div className='flex flex-col items-center'>
                <label htmlFor="check-in" className='font-semibold text-sm'>Check-In</label>
                <input id="check-in" type="date" className="border px-3 py-1 rounded-sm" {...register("checkIn")}></input>                
            </div>
            <div className='flex flex-col items-center'>
                <label htmlFor="Check-Out">Check-In </label>
                <input {...register("checkOut")} id="check-out" type="date" className="border px-3 py-1 rounded-sm"></input>                    
            </div>
            <button className='btn bg-emerald-500'>Reserva</button>
            </div>
            {/* errors */}
            <div className='flex flex-col justify-center items-center gap-2'>
            <p className={ cn('bg-red-500 bg-opacity-35 text-red-500 py-1 px-3 rounded-sm',errors.checkIn && 'block')}>
                {errors.checkIn  && errors.checkIn.message    }</p>
            <p>{(errors.checkOut ) &&      ( errors.checkOut.message) }</p>
            <p className={`text-x1 `  }> texto de prueba</p>
            </div>
            </form>      
        </div>
  )
}

export default Reservations