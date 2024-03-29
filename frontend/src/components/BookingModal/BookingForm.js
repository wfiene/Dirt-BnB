import DatePicker from 'react-datepicker'

import React, { useState, useEffect } from "react";
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { newBookingThunk } from '../../store/bookings';
import './BookingForm.css'
import "react-datepicker/dist/react-datepicker.css";


const BookingForm = ({ spot }) => {
  const dispatch = useDispatch()
  // const { spotId } = useParams()
  const sessionUser = useSelector(state => state.session.user)
  const spotPrice = useSelector(state => state.spots.singleSpot.price)
  const currentSpot = useSelector(state => state.spots.singleSpot)
  const userBookingsObj = useSelector(state => state.bookings)
  const userBookings = userBookingsObj ? Object.values(userBookingsObj) : null
  console.log('----------user bookings-----------', userBookings)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showModal, setShowModal] = useState(false);
  const [showEditCal, setShowEditCal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    setErrorMessage('')
  }, [showEditCal, startDate, endDate])

  const numDays = (startDate, endDate) => {
    let difInTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(difInTime / (1000 * 3600 * 24));
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   // check if there are any existing bookings for the selected dates
  //   const existingBookings = userBookings?.filter((booking) => {
  //     const bookingStart = new Date(booking.startDate);
  //     const bookingEnd = new Date(booking.endDate);
  //     return (
  //       (bookingStart <= startDate && startDate <= bookingEnd) ||
  //       (bookingStart <= endDate && endDate <= bookingEnd) ||
  //       (startDate <= bookingStart && bookingEnd <= endDate)
  //     );
  //   });
  
  //   if (existingBookings.length > 0) {
  //     alert("This spot is already booked for the selected dates");
  //     return;
  //   }
  
  //   const payload = {
  //     spotId: spot.id,
  //     userId: sessionUser.id,
  //     startDate,
  //     endDate,
  //   };
  //   const data = await dispatch(newBookingThunk(payload));
  //   if (data) {
  //     setShowModal(false);
  //   } else {
  //     setShowModal(true);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      spotId: spot.id,
      userId: sessionUser.id,
      startDate,
      endDate
    }
    try {
      const data = await dispatch(newBookingThunk(payload));
      if (data) {
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    } catch (err) {
      setErrorMessage("Error: This spot is already booked for the selected dates.");
    }
  }
  

  return (
    <div>
      <div >
        <div className='booking-dates'>
          <div className='booking-checkin'>
            <label className='check-in-out'>CHECK-IN</label>
            <DatePicker
              className='datePicker'
              selected={startDate}
              onSelect={(date) => setStartDate(date)}
            />
          </div>
          <div className='booking-checkout'>
            <label className='check-in-out'>CHECKOUT</label>
            <DatePicker
              className='datePicker'
              selected={endDate}
              onSelect={(date) => setEndDate(date)}
            />
          </div>
        </div>

        <button id='booking-reserve' onClick={() => setShowModal(true)}>Reserve</button>



        {showModal && (
          <Modal onClose={() => setShowModal(false)} >
            <div id='booking-conf-modal'>
              <h3>Booking Details</h3>
              <div id='bcm-spot-details'>
                <div>{currentSpot.name}</div>
                <div>{currentSpot.address}</div>
                <div>{currentSpot.city}, {currentSpot.state}</div>
              </div>
              <div id='bcm-dates-container'>
                <div id='bcm-dates'>
                  <div>{startDate.toDateString()} to {endDate.toDateString()}</div>
                  <div>{!showEditCal ?
                    <button className='change-confirm' onClick={() => setShowEditCal(true)}>change</button> :
                    <button className='change-confirm' onClick={() => setShowEditCal(false)}>confirm</button>}
                  </div>
                </div>
                {showEditCal && (
                  <div className='bcm-booking-dates'>
                    <div className='booking-checkin'>
                      <label className='check-in-out'>CHECK-IN</label>
                      <DatePicker
                        className='datePicker'
                        selected={startDate}
                        onSelect={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className='booking-checkout'>
                      <label className='check-in-out'>CHECKOUT</label>
                      <DatePicker
                        className='datePicker'
                        selected={endDate}
                        onSelect={(date) => setEndDate(date)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className='bcm-booking-charges'>
                <div className='booking-fees'>${spotPrice} x {numDays(startDate, endDate)} nights</div>
                <div>${numDays(startDate, endDate) * spotPrice}</div>
              </div>
              <div className='booking-charges'>
                <div className='booking-fees'>Cleaning fee</div>
                <div>$150</div>
              </div>
              <div className='booking-charges'>
                <div className='booking-fees'>Dirt BnB service fee</div>
                <div>$313</div>
              </div>
              <div className='booking-charges'>
                <div className='booking-fees'>Tax </div>
                <div>${Math.floor((numDays(startDate, endDate) * spotPrice + 150 + 313) * .14)}</div>
              </div>
              <div id='bcm-booking-total'>
                <div>Your Total</div>
                <div>${numDays(startDate, endDate) * spotPrice + 150 + 313}</div>
              </div>
              <div>
              {errorMessage && <h3 className='red-h3'>This spot is already booked for these date[s]</h3>}
              </div>
              {/* {errorMessage.length && <h3 className='red-h3'>This spot is already booked for these date[s]</h3>} */}
              <form onSubmit={handleSubmit}>
                <button id='bcm-bookspot' type='submit'>Book</button>
              </form>
            </div>

          </Modal>
        )}

      </div>




      {/* <div>{console.log(startDate.getTime())}hello{startDate.getDate()}</div> */}
      <div id='booking-nocharge'>You won't be charged yet</div>
      <div className='booking-charges'>
        <div className='booking-fees'>${spotPrice} x {numDays(startDate, endDate)} nights</div>
        <div>${numDays(startDate, endDate) * spotPrice}</div>
      </div>
      <div className='booking-charges'>
        <div className='booking-fees'>Cleaning fee</div>
        <div>$150</div>
      </div>
      <div className='booking-charges'>
        <div className='booking-fees'>Dirt BnB service fee </div>
        <div>$313</div>
      </div>
      <div id='total-before'>
        <div>Total before taxes</div>
        <div>${numDays(startDate, endDate) * spotPrice + 150 + 313}</div>
      </div>

    </div>
  )
}

export default BookingForm