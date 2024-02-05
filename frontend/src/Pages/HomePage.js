import React from "react";
import Navbar from "../Components/Navbar";
import CarouselCustom from "../Components/Carousel";
import Utility from "../Components/Utility";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
function HomePage() {
    return (
        <>
           <Navbar/>
           <CarouselCustom/>
           <Utility/>
           <AboutUs/>
           <ContactUs/>
           <Footer/>
        </>
    )
}
export default HomePage;