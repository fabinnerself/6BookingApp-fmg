import React, { useEffect, useRef } from 'react'
import {  toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useApiFech from '../../hooks/useApiFech'
import { useHotels } from '../../context/hotels'

function Filter({ setResul  }) {
    const { getByCity } = useHotels()
    const [cities, getCities] = useApiFech()
    const selectRef = useRef()

useEffect(()=> {
    getCities({
        url: '/cities'
    })
},[])

const handleCHange = () => {
   
    let strMesage = "";
    const selectedCityId = selectRef.current.value;    
 
    const selectedCity = cities?.find(city => city?.id === Number(selectedCityId));

    const hotels = JSON.parse(localStorage.getItem('hotels'))|| []    

    const filtered = hotels?.filter(hotel =>
        hotel?.cityId === Number(selectedCityId)
    );
        
    const numberOfFilteredRegs = filtered?.length || 0;    

    if (selectedCity) {
        strMesage = `Se encontraron ${numberOfFilteredRegs} registro(s) al realizar la búsqueda con el valor <<${selectedCity.name}>> 🔍`;        
    } else {
        strMesage = `Se realizó la búsqueda para todos los registros 🔍`;
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


    console.log("first ", selectRef)
    getByCity(selectRef.current.value)
    setResul("")
}

  return (
    <div className='input-form w-full md:w-fit'>
        <select ref={selectRef} 
            className='input-form w-full md:w-fit focus:outline-none'
            onChange={handleCHange}
        >  
            <option value="">All cities</option>
            {cities?.map((city) => (
                <option key={city?.id} value={city?.id}>{city?.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Filter