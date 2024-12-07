import React from 'react'
import RatingStars from '../RatingStars'

function ReviewCard({ review }) {
  return (
    <div className='border-b py-4'>
       
         <div className='flex justify-between items-center mb-4 '>
          <h2 className='font-semibold capitalize'>{review.user.firstName} {review.user.lastName}</h2>
          <div>  <span>    
              <RatingStars rating={review?.rating.toFixed(1)} />              
              </span>
          </div>

        </div>
        <p className='text-sm text-left '>{review.comment}</p>
          
    </div>
  )
}

export default ReviewCard