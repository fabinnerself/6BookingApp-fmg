import React,  { useContext } from 'react'
import { Input } from 'postcss'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { cn } from '../../utils'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import useApiFech from '../../hooks/useApiFech'
import { Text, LanguageContext } from '../../containers/Language';

const schema = z.object({
    checkIn: z.string().min(10, { message:  <Text tid="d_m_minCI" />  }),
    checkOut: z.string().min(10, { message:  <Text tid="d_m_minCO" />  })
}).refine((data) => {
    const checkInDate = new Date(data.checkIn);        
    const today = new Date();

    return checkInDate > today 
}, {
    message: <Text tid="d_me_1" /> ,
    path: ["checkIn"] 
}).refine((data) => {
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);   

    return checkOutDate > checkInDate;
}, {
    message: <Text tid="d_me_2" /> ,
    path: ["checkOut"] 
});

function  Reservations({ hotelId }) {
    const [data,createReservation] = useApiFech()
    const {handleSubmit, register, formState: {errors }, reset} = useForm({ 
        resolver: zodResolver(schema)})
    const { dictionary } = useContext(LanguageContext);

    const fValidateDates = (CheckIn, CheckOut) => {
        const today = new Date(); 
        const checkInDate = new Date(CheckIn);
        const checkOutDate = new Date(CheckOut);

        if (checkInDate <= today) {        
            return false; 
        }
        
        if (checkOutDate <= checkInDate) {        
            return false; 
        }
        
        return true; 
    }

    const onSubmit = (dataForm) => {
        dataForm.hotelId = hotelId 
        const blnRes = fValidateDates(dataForm.checkIn,dataForm.checkOut)
        console.log("res ",blnRes)
        if(blnRes){
            createReservation({
                url:'/bookings',
                method: 'POST',
                body:dataForm
            })
            reset();
           
            toast(  dictionary.d_t_succes , {
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
        
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className='flex flex-col md:flex-row md:items-center justify-center gap-2 mb-4'>

                <div className='flex items-center justify-center gap-2 mb-4'>
                    <div className='flex flex-col items-center '>
                        <label htmlFor="check-in" className='font-semibold text-sm'><Text tid="d_checkin" /></label>
                        <input id="check-in" type="date" {...register("checkIn")}
                            className="border px-3 py-1 rounded-sm" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="check-out"><Text tid="d_checkout" /></label>
                        <input id="check-out" type="date"  {...register("checkOut")} 
                            className="border px-3 py-1 rounded-sm" />
                    </div>                    
                </div>
                   
                <button className='btn bg-emerald-500 py-1.5 '><Text tid="Reserve" /> </button>
            </div>
            {/* errors */}
             
                <p className={ cn('error-validation hidden text-center',
                    (errors.checkIn || errors.checkOut  ) && 'block')}>
                    {errors.checkIn  &&   errors.checkIn.message } {' '} 
                    {errors.checkOut  &&  errors.checkOut.message }
                </p>                
             
            </form>      
        </div>
  )
}

export default Reservations