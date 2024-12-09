import React, { useEffect, useState } from 'react'
import RatingStars from '../RatingStars'
import { IoLocationOutline } from "react-icons/io5"

function Description({ rating, address, description}) {
    const [translatedDescription, setTranslatedDescription] = useState('');

    const currLang = window.localStorage.getItem('rcml-lang')

    useEffect(() => {

      if(currLang != "en" ){

          const translateText = async () => {
              const limitedDescription = (description || '').substring(0, 495);

              try {
                  const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(limitedDescription)}&langpair=en|${currLang}`);
                  
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }

                  const data = await response.json();
                  setTranslatedDescription(data.responseData.translatedText);
              } catch (error) {
                  console.error('Error al traducir:', error);
              }
          };

          translateText();
      }
    }, [description]);

    return (
        <div>
            <div className='flex items-center gap-2'>
                <RatingStars rating={rating} />                
            </div>
            <p className='flex items-center gap-1 mb-4 '>
                <IoLocationOutline /><span className="text-xs">{address}</span> <IoLocationOutline /></p>
            <p className='text-justify'>{translatedDescription || description}</p>

        </div>
    )
}

export default Description