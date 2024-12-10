import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { priceFormat , priceFormatCurrency , formatDate } from "../../utils/index"
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { BsCurrencyDollar } from "react-icons/bs";
import { Text  } from '../../containers/Language';

function ReservationsCard({ reservation , onDelete , onRate }) {
    const checkInDay = new Date(reservation.checkIn + 'T00:00:00')
    const checkOutDay =new Date(reservation.checkOut + 'T00:00:00')

    

    //calcular total noches
    const milliseconsPerDay = 1000 * 60 * 60 * 24
    const nights = Math.ceil((checkOutDay-checkInDay) / milliseconsPerDay)

    const priePerNight = parseInt(reservation?.hotel?.price)
    const totalPrice = priePerNight*nights

    const [eurPrice, setEurPrice] = useState(0);
    const [exchangeR, setExchangeR] = useState(0);

    const currLang = window.localStorage.getItem('rcml-lang') || 'en'
    const currCurrency = window.localStorage.getItem('rcml-currency') || 'US'   
    
    const formattedCheckIn = formatDate(checkInDay, currLang);
    const formattedCheckOut = formatDate(checkOutDay, currLang);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/971fd1cf58913cf72c651307/pair/USD/${currCurrency}`);
                const data = await response.json();
                const exchangeRate = data.conversion_rate;
                setEurPrice(totalPrice * exchangeRate);
                setExchangeR(exchangeRate)
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };

        fetchExchangeRate();
    }, [totalPrice]);    

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 
    transition-transform duration-300 '>
        <h2 className='bg-blue-500 text-white text-xl font-semibold p-4 '>
            <Link to={`/hotel/${reservation?.hotel?.id}`}>
            {reservation?.hotel.name} </Link></h2>
        <div className='p-6 flex-col gap-5 '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                     <IoCalendarClearOutline className='size-8' />
                        <div>
                            <p className='font-semibold'><Text tid="d_checkin" /></p>
                            <p className='text-xs'>{formattedCheckIn}</p>
                        </div>
                </div>

                <div className='flex items-center gap-2'>
                    <IoCalendarClearOutline className='size-8' />
                    <div>
                        <p className='font-semibold'><Text tid="d_checkout" /></p>
                        <p className='text-xs'>{formattedCheckOut}</p>
                    </div>
                </div>                 
            </div>

            <div className='flex items-center gap-2'>
                <IoLocationOutline className='size-8' />
                <p className='text-sm'>{reservation?.hotel?.city?.name}, {reservation?.hotel?.city?.country}</p>
            </div>

            <div className='flex items-center gap-2'>
                <LiaBedSolid className='size-6'/>
                <p>{nights} {nights===1 ? <Text tid="r_night" />: <Text tid="r_nights" />}</p>
            </div>

            <div className='flex justify-between items-center'>                
                <div className='flex items-center gap-2'>
                    <BsCurrencyDollar className='size-6'/>
                    <p className='text-xl font-semibold p-4 ' ><Text tid="r_price" /> </p>
                </div>
                <p className='font-semibold'>{priceFormat.format(priePerNight)} </p>
                
            </div>
            <div className='flex justify-between items-center border-t pt-4'>                
                <div className='flex items-center gap-2'>
                    <BsCurrencyDollar className='size-6'/>
                    <p className='font-semibold text-lg  p-4 ' ><Text tid="r_total" />  </p>
                </div>
                <p className='font-semibold text-xl'>{priceFormat.format(totalPrice)} </p>
                 
            </div>     

            <div className='flex justify-between items-center border-t pt-4'>                
                <div className='flex items-center gap-2'>
                    
                    <p className='font-semibold text-lg  p-4 ' ><Text tid="r_total" />  </p>
                </div>                
                {eurPrice && ( 
                    <div className='flex flex-col items-end'>
                        <p className='font-semibold text-xl'>{priceFormatCurrency(eurPrice, currLang, currCurrency)}</p>
                        <p className='text-xs text-right'><Text tid="r_convRate" /> { exchangeR.toFixed(2)}</p>
                    </div>
                )}
            </div>       

        </div>

        <div className='flex justify-end  bg-gray-50 py-9 px-6 gap-3'>
            <button className='btn bg-red-500' onClick={() => onDelete(reservation?.id)}><Text tid="r_deleteB" /> </button>{' '}
            <button className='btn bg-yellow-500' onClick={() => onRate(reservation?.hotel?.id)}><Text tid="Review" />   </button>
        </div>
    </div>
  )
}

export default ReservationsCard