import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img className='mt-5 mb-4'  style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className='mb-4'>{service.name}</h5>
            <p className='text-secondary pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis obcaecati aperiam numquam enim earum corporis?</p>            
        </div>
    );
};

export default ServiceDetail;