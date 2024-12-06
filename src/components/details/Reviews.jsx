import React, { useEffect } from 'react'
import useApiFech from '../../hooks/useApiFech'
import ReviewList from './ReviewList'

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
    <div><h3 >Reviews</h3>
    <ReviewList reviews={reviews?.results} />
    </div>
  )
}

export default Reviews