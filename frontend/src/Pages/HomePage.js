import React from "react";
import Navbar from "../Components/Navbar";
import CarouselCustom from "../Components/Carousel";
import LoginPage from "../Components/LoginPage";
import SignUp from "../Components/Signup";
import Utility from "../Components/Utility";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import { useState } from "react";
function HomePage() {
    const [loginForm, setLoginForm] = useState(true)

    return (
        <>
           <Navbar/>
           <CarouselCustom/>
           <Utility/>
           
                         <LoginPage/>
                        
                
           <AboutUs/>
           <ContactUs/>
           <Footer/>
        </>
    )
}
export default HomePage;