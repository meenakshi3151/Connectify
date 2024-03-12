import React from 'react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {BrowserRouter} from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';


function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast=useToast();
const handleLoginClick = async (e) => {
  e.preventDefault();
  if(email==='' || password===''){
    toast({
      title: "Please Fill all the Fields",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    })
    return;
  }
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:5000/authUser",
      {
        email,
        password,
     },
      config
    );

    if (response.data) {
      // Check if the 'data' property is available in the response
      const data = response.data;
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    //  navigate('/authUser')
    } else {
      
      toast({
        title: "Error Occured: No Data in Response",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }

  } catch (error) {
    console.log(error);
    toast({
      title: "Error Occured!",
      description: error.response?.data?.message || "An error occurred",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  }
}
    const backgroundStyle = {
        background:'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    }

  
  return (
    <BrowserRouter>
    <MDBContainer fluid   style={backgroundStyle} id = "login">

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <label style={{marginRight: "12rem"}}>Email address</label>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  id='formControlLg' type='email' size="lg" onChange={(e)=>{setEmail(e.target.value)}}/>
              <label style={{marginRight : "14rem"}}>Password</label>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  id='formControlLg' onClick={(e)=>{setPassword(e.target.value)}} type='password' size="lg" />

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <button type="button" class="btn btn-primary"  style={{ padding: "15px 35px", fontSize:"18px", marginLeft:"80px"}} onClick={handleLoginClick}>Login</button>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
                   
                   <Link to = "#signup">
              <div>
                <p className="mb-0">Don't have an account? 
                 <a href="Signup.js" class="text-white-50 fw-bold" onClick={() => {props.setLoginForm(false)}} >   Sign Up</a></p>
              </div>
               </Link>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </BrowserRouter>
    
  );
}

export default LoginPage;