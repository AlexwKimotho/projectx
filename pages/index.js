import React, { Fragment } from 'react';
import Hero from '../components/hero3/index';
import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection';
import About from '../components/about';
import BlogSection from '../components/BlogSection';
import Destination from '../components/Destination';
import FunFact from '../components/FunFact';
import Newslatter from '../components/Newslatter/Newslatter';
import PricingSection from '../components/PricingSection';
import Rooms from '../components/Rooms/Rooms';
import ServiceSection from '../components/ServiceSection';
import Testimonial from '../components/Testimonial';
import Footer from '../components/footer';
import Scrollbar from '../components/scrollbar'
import Logo from '/public/images/logo.png'



const HomePage = () => {

    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={Logo} />
            <Hero />
            <SearchSection />
            <Rooms />
            <About />
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'} />
            <Destination />
            <ServiceSection />
            <PricingSection />
            <Testimonial />
            <BlogSection />
            <Newslatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;