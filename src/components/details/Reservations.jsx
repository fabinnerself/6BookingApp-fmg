import { Input } from 'postcss'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { cn } from '../../utils'

const schema = z.object({
    checkIn: z.string().min(10,{message:"CheckIn is required with a valid date"}),
    checkOut:z.string().min(10,{message:"CheckOut is required with a valid date"})
})


function Reservations({ hotelId }) {
    const {handleSubmit, register, formState: {errors }, reset} = useForm({ 
        resolver: zodResolver(schema)})

    const onSubmit = (dataForm) => {
        dataForm.hotelId = hotelId 
        // console.log(dataForm);        
        reset()
    }     

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center justify-center gap-2 mb-4 '>
            <div className='flex flex-col items-center'>
                <label htmlFor="check-in" className='font-semibold text-sm'>Check-In</label>
                <input id="check-in" type="date" {...register("checkIn")}
                    className="border px-3 py-1 rounded-sm" />
            </div>
            <div className='flex flex-col items-center'>
                <label htmlFor="check-out">Check-Out</label>
                <input id="check-out" type="date"  {...register("checkOut")} 
                    className="border px-3 py-1 rounded-sm" />
            </div>
            <button className='btn bg-emerald-500 py-1.5 '>Reserva</button>
            </div>
            {/* errors */}
            <div className={`flex flex-col justify-center items-center gap-2 ${(errors.checkIn || errors.checkOut) ? 'block' : 'hidden'}`}>
                <p className={ cn('error-validation hidden',errors.checkIn && 'block')}>
                    {errors.checkIn  && errors.checkIn.message    }</p>
                <p className={ cn('error-validation hidden',errors.checkOut && 'block')}>
                    {(errors.checkOut ) &&  ( errors.checkOut.message) }</p>
                {/* <p className={`text-x1 ${false ? 'font-thin' : 'font-semibold'}`  }> texto de prueba</p> */}
            </div>
            </form>      
        </div>
  )
}

export default Reservations