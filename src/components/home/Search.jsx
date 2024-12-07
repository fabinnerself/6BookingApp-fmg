import React, { useRef , useEffect } from 'react'
import {  toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Search({ setResul , hotels}) {

const inputRef = useRef()


const handleSubmit = (e) => {
  e.preventDefault();
  const searchValue = inputRef.current.value.trim().toLowerCase();
  
  const filtered = hotels?.filter((hotel) =>
    hotel?.name.toLowerCase().includes(searchValue)
  );

  const numberOfFilteredRegs = filtered?.length || 0;

  const strMessage = searchValue
    ? `Se encontraron ${numberOfFilteredRegs} registro(s) al realizar la búsqueda con el valor <<${searchValue}>> 🔍`
    : `Se realizó la búsqueda para todos los registros 🔍`;

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
            <button className='btn'>Search</button >
        </div>
    </form>
  )
}

export default Search