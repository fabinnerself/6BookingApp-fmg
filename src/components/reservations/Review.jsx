import React ,  { useState, useContext } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewRating from './ReviewRating'
import useApiFech from '../../hooks/useApiFech'
import { Text , LanguageContext } from '../../containers/Language';


const initialState = {
    hotelId: null,
    rating: 0,
    comment: ''
}

function Review({ hotelId, closeModal }) {
    const [_, fetchReview]= useApiFech()
    const [review, setReview] = useState(initialState)
    const [error, setError] = useState(null)
    const { dictionary } = useContext(LanguageContext);
    
    const handleSubmit = () => {

        review.hotelId = hotelId
        
        const {comment, rating} = review

        if(!comment || rating===0){
            setError(<Text tid="r_r_error" />)
            return 
        }

        toast.success(dictionary.r_r_succes ,{ 
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light"
        });

        
        fetchReview({
            url: '/reviews',
            method: 'POST',
            body: review
        })
        setReview(initialState)
        closeModal()
    }

  return (
    <div className='w-80'>        
         <h2 className='text-2xl font-semibold mb-4'><Text tid="Review" /> </h2>
            
         <div className='mb-4'>
             <ReviewRating setReview={setReview} /> 
        </div>  
         
        <textarea className='input-form resize-none h-24 mb-4'             
            placeholder={dictionary.r_write}
            value={review.comment} 
            onChange={(e)=> setReview({...review,comment:e.target.value})}>                
        </textarea>         

        {error && (<p className='error-validation mb-4'>{error}</p>)}   

        <button className='btn ' onClick={handleSubmit}><Text tid="Submit" /></button> 

    </div>
  )
}

export default Review