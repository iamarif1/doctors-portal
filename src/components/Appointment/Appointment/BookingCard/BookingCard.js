import React from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
      <div className="col-md-4 mb-5">
        <div className="card p-3">
          <div className="card-body text-center">
            <h5 className="card-title text-brand">{booking.subject}</h5>
            <h6>{booking.visitingHour}</h6>
            <p>{booking.totalSpace} SPACES AVAILABLE</p>
            <button
                onClick={openModal}
              style={{ "background-color": "#15D2C5", border: "none" }}
              className="btn btn-brand text-white text-uppercase"
            >
              Book Appointment
            </button>
            <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}/>
          </div>
        </div>
      </div>
    );
};

export default BookingCard;