import React, { useEffect, useRef , useContext } from 'react'
import {  toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useApiFech from '../../hooks/useApiFech'
import { useHotels } from '../../context/hotels'
import { Text , LanguageContext } from '../../containers/Language';

function Filter({ setResul  }) {
    const { getByCity } = useHotels()
    const [cities, getCities] = useApiFech()
    const selectRef = useRef()
    const { dictionary } = useContext(LanguageContext);

useEffect(()=> {
    getCities({
        url: '/cities'
    })
},[])

const handleCHange = () => {    
   
    let strMesage = "";
    let numberOfFilteredRegs=0
    const selectedCityId = selectRef.current.value;    
 
    const selectedCity = cities?.find(city => city?.id === Number(selectedCityId));

    const hotels = JSON.parse(localStorage.getItem('hotels'))|| []    

    if(selectedCity){
        const filtered = hotels?.filter(hotel =>
            hotel?.cityId === Number(selectedCityId)
        );    
        numberOfFilteredRegs = filtered?.length || 0;    
    }else {
        numberOfFilteredRegs =hotels.length || 0;
    } 

    if (selectedCity) {
        strMesage = `${dictionary.s_m_p1} ${numberOfFilteredRegs} ${dictionary.s_m_p2} <<${selectedCity.name}>> 🔍`;        
    } else {
        strMesage = `${dictionary.s_m_p1}  ${numberOfFilteredRegs} ${dictionary.s_m_p2} ${dictionary.s_m_p4} `;
    }
    
    toast.info(strMesage, {
        position: "top-right",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide
    });  
 
    getByCity(selectRef.current.value)
    setResul("")
}

  return (
    <div className='input-form w-full md:w-fit'>
        <select ref={selectRef} 
            className='input-form w-full md:w-fit focus:outline-none'
            onChange={handleCHange}
        >  
            <option value=""><Text tid="h_f_allcities" /></option>
            {cities?.map((city) => (
                <option key={city?.id} value={city?.id}>{city?.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Filter