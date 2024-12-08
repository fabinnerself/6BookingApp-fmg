import React, { useRef , useEffect, useContext } from 'react'
import {  toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text, LanguageContext } from '../../containers/Language';

function Search({ setResul , hotels}) {
  const inputRef = useRef()
  const { dictionary } = useContext(LanguageContext);


const handleSubmit = (e) => {
  e.preventDefault();
  const searchValue = inputRef.current.value.trim().toLowerCase();
  
  const filtered = hotels?.filter((hotel) =>
    hotel?.name.toLowerCase().includes(searchValue)
  );

  const numberOfFilteredRegs = filtered?.length || 0;

//? `  Se encontro(aron) ${numberOfFilteredRegs} registro(s) al realizar la búsqueda con el valor <<${searchValue}>> 🔍`
//: ` Se encontro(aron) ${numberOfFilteredRegs} registro(s) al realizar la búsqueda con todos los registros 🔍`;

  const strMessage = searchValue
    ? `${dictionary.s_m_p1}  ${numberOfFilteredRegs} ${dictionary.s_m_p2} ${dictionary.s_m_p3} <<${searchValue}>> 🔍`
    : `${dictionary.s_m_p1} ${numberOfFilteredRegs} ${dictionary.s_m_p2} ${dictionary.s_m_p4}`;

  toast.info(strMessage, {
    position: "top-right",
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });

  setResul(inputRef.current.value.trim().toLowerCase())
  inputRef.current.value = ""

};
   

  return (
    <form onSubmit={handleSubmit} className='w-full md:w-fit '>
        <div className='input-form flex items-center gap-4'>
            <input ref={inputRef} type="search" className=' w-full py-1 px-2 focus:outline-none ' />
            <button className='btn'><Text tid="h_search" /></button >
        </div>
    </form>
  )
}

export default Search