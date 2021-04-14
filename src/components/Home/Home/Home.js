import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from './../FeaturedService/FeaturedService';
import MakeAppointment from './../MakeAppointment/MakeAppointment';
import Testimonials from './../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import Doctors from './../Doctors/Doctors';
import Contact from './../Contact/Contact';
import Footer from './../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;