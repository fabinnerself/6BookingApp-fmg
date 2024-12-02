import { Input } from 'postcss'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { cn } from '../../utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const schema = z.object({
    checkIn: z.string().min(10, { message: "Check-In es requerido" }),
    checkOut: z.string().min(10, { message: "Check-Out es requerido" })
}).refine((data) => {
    const checkInDate = new Date(data.checkIn);        
    const today = new Date();

    return checkInDate > today 
}, {
    message: "Las fecha CheckIn debe ser mayor a hoy",
    path: ["checkIn"] 
}).refine((data) => {
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);   

    return checkOutDate > checkInDate;
}, {
    message: "CheckOut debe ser mayor a CheckIn",
    path: ["checkOut"] 
});

function Reservations({ hotelId }) {
    const {handleSubmit, register, formState: {errors }, reset} = useForm({ 
        resolver: zodResolver(schema)})

    const fValidateDates = (CheckIn, CheckOut) => {
        const today = new Date(); // Obtener la fecha actual
        const checkInDate = new Date(CheckIn);
        const checkOutDate = new Date(CheckOut);

        // Validar que CheckIn sea mayor a hoy
        if (checkInDate <= today) {
            console.log("La fecha de Check-In debe ser mayor a hoy.");
            return false; // O manejar el error como prefieras
        }

        // Validar que CheckOut sea mayor a CheckIn
        if (checkOutDate <= checkInDate) {
            console.log("La fecha de Check-Out debe ser mayor a la fecha de Check-In.");
            return false; // O manejar el error como prefieras
        }

        console.log("Fechas válidas:", CheckIn, CheckOut);
        return true; // Si todas las validaciones pasan
    }

    const onSubmit = (dataForm) => {
        dataForm.hotelId = hotelId 
        const blnRes = fValidateDates(dataForm.checkIn,dataForm.checkOut)
        console.log("res ",blnRes)
        if(blnRes){
            reset();    
            toast('🛫🌍🏨📅📖 Reserva registrada correctamente! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }else{
            console.log("error", "errors");
        }
    }

  return (
    <div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
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
            </div>
            </form>      
        </div>
  )
}

export default Reservations