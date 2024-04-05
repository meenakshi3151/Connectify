import React from "react";
import { useState } from "react";
import CarouselCustom from "../Components/Carousel";
import Utility from "../Components/Utility";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import LoginPage from "../Components/LoginPage";
import SignUp from "../Components/Signup";
import Dashboard from "./Dashboard";
import NavBar from "../Components/Navbar";

function Homepage() {
        const [loginForm, setLoginForm] = useState(true)

        return(
        <>
               
               <NavBar/>
               <CarouselCustom/>
               <Utility/>
                 {
                        loginForm ?
                         <LoginPage setLoginForm = {setLoginForm}/>
                         :
                         <SignUp  setLoginForm = {setLoginForm}/>
                 }
               <AboutUs/>
               <ContactUs/>
                
               <Footer/>
        </>
        );
}

export default Homepage;