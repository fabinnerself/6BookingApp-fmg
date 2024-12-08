import React, { useEffect , useState } from 'react'
import useApiFech from '../hooks/useApiFech'
import ReservationsList from '../components/reservations/ReservationsList'
import Modal from '../components/Modal'
import Review from '../components/reservations/Review'
import { Text } from '../containers/Language';

function Reservations() {
   const [reservations, fetchReservations] = useApiFech()
   const [openModal, setOpenModal] = useState(false)
   const [child, setChild] = useState(null)

useEffect(() =>{
  fetchReservations({
    url:"/bookings"
  })
},[])

const handleDelete = (id) => {
  fetchReservations({
    url:`/bookings/${id}`,
    method:"DELETE"
  })
  setOpenModal(false)
}

const cancelDelete = () => {
  setOpenModal(false)
}

const confirmDelete = (id) => {
  setOpenModal(true)
  setChild(<div className='w-[280px] h-[150px] flex flex-col'> 
      <h2 className='text-center  font-semibold text-xl'><Text tid="r_confirmDelete" /> </h2> 
      <p><Text tid="r_deleteL1" />   </p>  
      <p><Text tid="r_deleteL2" />  </p> 
      <p className='mt-0.5 pt-0.5'> &nbsp;</p>             
      <div className="flex justify-end gap-3">     
        <button onClick={() => handleDelete(id)} className="btn bg-red-500 text-white"><Text tid="r_deleteB" /></button>   
        <button onClick={cancelDelete} className="btn bg-green-500 text-white"><Text tid="r_cancellB" /></button> 
      </div> 
    </div>)
}

const handleOpenModal = (id) => {
  setOpenModal(true)
  setChild(<Review hotelId={id} closeModal={closeModal} />)    
}

const closeModal = () => {
  setOpenModal(false)
}

  return (
    <div className='max-w-5xl mx-auto px-5 py-16'> 
      
      <ReservationsList 
        reservations={reservations} 
        onDelete={confirmDelete} 
        onRate={handleOpenModal} />
          
      <Modal openModal={openModal} closeModal={closeModal} >
        {child}         
      </Modal>
    </div>
  )
}

export { Reservations }