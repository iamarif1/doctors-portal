import React from 'react';
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
    

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch("https://doctors-portal3.herokuapp.com/addAppointment",{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json)
        .then(success => {
          if(success){
            closeModal();
            alert('Your Appointment Is Received')
          }
        })
    }
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 style={{ color: "#15D2C5" }} className="text-center">
            {appointmentOn}
          </h2>
          <p className="text-secondary text-center">
            <small>On {date.toDateString()}</small>
          </p>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                ref={register({ required: true })}
                name="name"
                placeholder="Your Name"
                className="form-control"
              />
              <br />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                ref={register({ required: true })}
                name="phone"
                placeholder="Phone Number"
                className="form-control"
              />
              <br />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                ref={register({ required: true })}
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <br />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group row">
              <div className="col-4">
                <select
                  className="form-control"
                  name="gender"
                  ref={register({ required: true })}
                >
                  <option disabled={true} value="Not set">
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not set">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-4">
                <input
                  ref={register({ required: true })}
                  className="form-control"
                  name="age"
                  placeholder="Your Age"
                  type="number"
                />
                {errors.age && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-4">
                <input
                  ref={register({ required: true })}
                  className="form-control"
                  name="weight"
                  placeholder="Weight"
                  type="number"
                />
                {errors.weight && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <br />
            <div className="form-group text-right">
              <button
                type="submit"
                className="btn text-white"
                style={{ "background-color": "#15D2C5" }}
              >
                Send
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
};

export default AppointmentForm;