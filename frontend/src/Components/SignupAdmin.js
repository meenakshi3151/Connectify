import React from 'react';
import { FaFacebook,FaGithub,FaInstagram,FaGoogle,FaTwitter ,FaLinkedin} from "react-icons/fa";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {BrowserRouter} from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';
import '../App.css';

function SignUpAdmin(props) {
    const backgroundStyle = {
        background:'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    }

  
  return (
    <BrowserRouter>
    <MDBContainer fluid  className='p-4 background-radial-gradient overflow-hidden' id = "signup">

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

        
              <div class="d-flex gap-2 col-3 mx-auto justify-content-centre">
     <button class="btn btn-primary" type="button" style={{background: "#222"}} >SignUp As Admin</button> 
    </div>
                <br></br>
              <div className="text-center"   style={{display: "flex", alignItems: 'center', justifyContent: 'center'  }}>
              <br></br>
                <p style={{ marginBottom:"4px" }}>or </p>
                    <br></br>
                    
                <MDBBtn tag='a' color='none' className='mx-3 my-2 ' style={{ color: '#1266f1' }}>
                  <FaFacebook/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaTwitter/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                    <FaGoogle/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaGithub/>
                </MDBBtn>

              </div>
              <br></br>
              <p style={{textAlign: "center"}}>Already have an account: </p>
              <div class="d-grid gap-2 col-6 mx-auto">
     <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={() =>{props.setLoginForm(true)}}>Login</button>
               </div>
             
            </MDBCardBody>
         </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </BrowserRouter>
  );
}

export default SignUpAdmin;