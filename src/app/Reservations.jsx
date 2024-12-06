import React, { useEffect , useState } from 'react'
import useApiFech from '../hooks/useApiFech'
import ReservationsList from '../components/reservations/ReservationsList'
import Modal from '../components/Modal'
import Review from '../components/reservations/Review'

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
}

const handleOpenModal = (id) => {
  setOpenModal(true)
  setChild(<Review hotelId={id} closeModal={closeModal} />)
  // setChild('<h2> contendio </h2>')
  console.log("rate ",id)
}

const closeModal = () => {
  setOpenModal(false)
}

  return (
    <div className='max-w-5xl mx-auto px-5 py-16'> 
    <ReservationsList 
      reservations={reservations} onDelete={handleDelete} 
      onRate={handleOpenModal} />
        
    <Modal openModal={openModal} closeModal={closeModal} >
       {child} 
      {/* <Review hotelId={1}  closeModal={closeModal} /> */}
      
    </Modal>
    </div>
  )
}

export { Reservations }