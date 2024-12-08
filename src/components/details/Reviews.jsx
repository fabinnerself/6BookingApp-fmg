import React, { useEffect } from 'react'
import useApiFech from '../../hooks/useApiFech'
import ReviewList from './ReviewList'
import { Text } from '../../containers/Language';

function Reviews({ hotelId }) {
    const [reviews, setReviews] = useApiFech()

    useEffect(()=> {
        if(hotelId){
          console.log("id ", hotelId)
          setReviews({
            url:`/reviews?hotelId=${hotelId}`})
        }        
    },[hotelId])
  return (
    <div className='text-2xl font-semibold text-center mb-4'><h3 ><Text tid="Reviews" /></h3>
    <ReviewList reviews={reviews?.results} />
    </div>
  )
}

export default Reviews