import React from 'react'
import Reservations from '../details/Reservations'
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbSettingsDollar } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import {priceFormat} from "../../utils/index"


function ReservationsCard({ reservation }) {
    const checkInDay = new Date(reservation.checkIn + 'T00:00:00')
    const checkOutDay =new Date(reservation.checkOut + 'T00:00:00')
    //calcular total noches
    const milliseconsPerDay = 1000 * 60 * 60 * 24
    const nights = Math.ceil((checkOutDay-checkInDay) / milliseconsPerDay)

    const priePerNight = parseInt(reservation?.hotel?.price)
    
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 
    transition-transform duration-300 m-5'>
        <h2 className='text-xl font-semibold p-4 '>
            {reservation?.hotel.name}</h2>
        <div className='p-6 flex-col gap-5 '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                     <IoCalendarClearOutline className='size-8' />
                        <div>
                            <p className='font-semibold'>Arrival</p>
                            <p className='text-xs'>{reservation.checkIn}</p>
                        </div>
                </div>

                <div className='flex items-center gap-2'>
                    <IoCalendarClearOutline className='size-8' />
                    <div>
                        <p className='font-semibold'>Departure</p>
                        <p className='text-xs'>{reservation.checkOut}</p>
                    </div>
                </div>                 
            </div>

            <div className='flex items-center gap-2'>
                <IoLocationOutline className='size-8' />
                <p className='text-sm'>{reservation?.hotel?.city?.name}, {reservation?.hotel?.city?.country}</p>
            </div>

            <div className='flex items-center gap-2'>
                <LiaBedSolid className='size-6'/>
                <p>{nights} {nights===1 ? 'night': 'nights'}</p>
            </div>

            <div className='flex justify-between items-cente'>                
                <div className='flex items-center gap-2'>
                    <BsCurrencyDollar className='size-6'/>
                    <p className='text-xl font-semibold p-4 ' >Price per night </p>
                    <p className='font-semibold'>{priceFormat.format(priePerNight)} </p>
                </div>
            </div>

        </div>

        <div>
            <button>Delete</button>{' '}
            <button>Rate</button>
        </div>
    </div>
  )
}

export default ReservationsCard