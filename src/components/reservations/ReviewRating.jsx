import React ,{ useState } from 'react'
import { FaStar } from "react-icons/fa";
import { cn } from '../../utils/index';

function ReviewRating({ setReview }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleHover = (index) => {
        console.log("rating ", index)
        setHover(index)
    }

    const handleClick = (index) => {
        console.log("rating ", index)
        setRating(index)        

        setReview((prevState)=> ({
            ...prevState,
            rating: index
        }))
        // setRating(0)
        // setHover(0)
    }

    const index =0
  return (
    <div className='flex gap-2 '>  
        
         {[...Array(5)].map((_, index) => (            
            <button 
                key={index + 1} 
                onclick={() => handleClick(index + 1)}
                onMouseEnter={() => handleHover(index + 1)}
                className='text-gray-400'  >
                    
                     <FaStar className={cn('text-3xl',
                        (hover > index || rating > index ) && 'text-yellow-500'
                    )}  /> 
            </button>
            ))}          
    </div>
  )
}

export default ReviewRating