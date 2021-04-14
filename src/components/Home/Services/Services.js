import React from 'react';
import fluoride from '../../../images/Fluoride.png';
import cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/Whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const Services = () => {
    return (
      <section>
        <div className="text-center mt-5">
          <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
          <h2 style={{ color: "#3A4256" }}>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5">
            {serviceData.map((service) => (
              <ServiceDetail service={service} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services;