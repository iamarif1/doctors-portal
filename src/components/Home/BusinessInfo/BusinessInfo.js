import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary"
  },
  {
    title: "visit Our Location",
    description: "Brooklyn, NY 10064, United State",
    icon: faMapMarkerAlt,
    background: "dark"
  },
  {
    title: "Contact Us Now",
    description: "+13434334344",
    icon: faPhoneAlt,
    background: "primary"
  },
];

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
              {
                infosData.map(info => <InfoCard info={info}/>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;