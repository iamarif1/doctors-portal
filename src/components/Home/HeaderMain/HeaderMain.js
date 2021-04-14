import React from 'react';
import chair from '../../../images/Chair.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3A4256" }}>
            Your New Smile <br /> Start Here
          </h1>
          <p className="text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            ipsum nemo nihil fugiat provident voluptatum pariatur sit ad
            officiis molestiae esse, dolorem quam beatae quasi!
          </p>
          <Link to="/appointment">
            <button
              to="/appointment"
              style={{ "background-color": "#15D2C5", border: "none" }}
              className="btn-lg text-white"
            >
              GET APPOINTMENT
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    );
};

export default HeaderMain;