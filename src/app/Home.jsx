import React, { useEffect, useState , useMemo } from 'react'
import HotelsList from '../components/home/HotelsList'
import { useHotels } from '../context/hotels'
import Layout from '../layouts/Layout'
import Search from '../components/home/Search'
import Filter from '../components/home/Filter'
import Menu from '../components/Menu'
import { FiFilter } from "react-icons/fi";

function Home() {
   const {hotels,getAll} =useHotels()
   const [result, setResul] =  useState('')
   const [openMenu,setOpenMenu] = useState(false)

useEffect(() =>{
  if(hotels.length===0){
    getAll()
  }
    
},[])
 

const handleToggle = () => {
  setOpenMenu(!openMenu)
}

 const filtered = hotels?.filter((hotel) => hotel?.name .toLowerCase().includes(result))

  return (
    <Layout >     
      <section className='max-w-5x1 mx-auto px-5 py-10'> 
        <div className='mb-8 flex justify-center items-center gap-4'>
          <Search  setResul ={ setResul }    hotels={hotels} />
          <button className='md:hidden' onClick={handleToggle}>
            <FiFilter className='size-9 text-red-500' /></button>
            <Menu openMenu={openMenu} closeMenu={handleToggle} > 
            <Filter  setResul ={setResul}  /> </Menu>
          
          </div>       
        <HotelsList hotels={filtered} />        
      </section>      
      </Layout>
  )
}

export   {Home}