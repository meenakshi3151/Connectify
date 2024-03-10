// import React from 'react';
// import { FaFacebook,FaGithub,FaInstagram,FaGoogle,FaTwitter ,FaLinkedin} from "react-icons/fa";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import {BrowserRouter} from "react-router-dom";
// import { HashLink as Link} from 'react-router-hash-link';
// import '../App.css';

// function SignUp(props) {
//     const backgroundStyle = {
//         background:'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
//     }


//   return (
//     <BrowserRouter>
//     <MDBContainer fluid  className='p-4 background-radial-gradient overflow-hidden' id = "signup">

//       <MDBRow>

//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center align-items-center '>

//           <h1 className="my-3 display-4 fw-bold ls-tight px-9 ">
//             The best offer 
//             <span className="text-primary"> for your business</span>
//           </h1>

          

//         </MDBCol>
//           <MDBRow>
//         <MDBCol md='6'>

//           <MDBCard className='my-4'>
//           <p style={{marginLeft:"38vh", color:"blue"}}>Signup as User</p>
//             <MDBCardBody className='p-4'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//               <div className='d-flex justify-content-center mb-4'>
//                 <MDBCheckbox name='flexCheck'  value='' id='flexCheckDefault' label='Connect with Connectify' />
//               </div>

        
//               <div class="d-flex gap-2 col-4 mx-auto justify-content-centre">
     
//      <button class="btn btn-primary" type="button" style={{background: "#222"}} >SignUp As User</button>
//                </div>
//                 <br></br>
//               <div className="text-center"   style={{display: "flex", alignItems: 'center', justifyContent: 'center'  }}>
//               <br></br>
//                 <p style={{ marginBottom:"4px" }}>or </p>
//                     <br></br>
                    
//                 <MDBBtn tag='a' color='none' className='mx-3 my-2 ' style={{ color: '#1266f1' }}>
//                   <FaFacebook/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                   <FaTwitter/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                     <FaGoogle/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                   <FaGithub/>
//                 </MDBBtn>

//               </div>
//               <br></br>
//               <p style={{textAlign: "center"}}>Already have an account: </p>
//               <div class="d-grid gap-2 col-6 mx-auto">
//      <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={() =>{props.setLoginForm(true)}}>Login</button>
//                </div>
             
//             </MDBCardBody>
//          </MDBCard>

//         </MDBCol>

//         <MDBCol md='6'>

// <MDBCard className='my-4'>
// <p style={{marginLeft:"38vh", color:"blue"}}>Signup as Admin</p>
//   <MDBCardBody className='p-4'>
            
//     <MDBRow>
//       <MDBCol col='6'>
//         <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//       </MDBCol>

//       <MDBCol col='6'>
//         <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
//       </MDBCol>
//     </MDBRow>

//     <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//     <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//     <div className='d-flex justify-content-center mb-4'>
//       <MDBCheckbox name='flexCheck'  value='' id='flexCheckDefault' label='Connect with Connectify' />
//     </div>


//     <div class="d-flex gap-2 col-4 mx-auto justify-content-centre">
// <button class="btn btn-primary" type="button" style={{background: "#222"}} >SignUp As Admin</button> 

//      </div>
//       <br></br>
//     <div className="text-center"   style={{display: "flex", alignItems: 'center', justifyContent: 'center'  }}>
//     <br></br>
//       <p style={{ marginBottom:"4px" }}>or </p>
//           <br></br>
          
//       <MDBBtn tag='a' color='none' className='mx-3 my-2 ' style={{ color: '#1266f1' }}>
//         <FaFacebook/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//         <FaTwitter/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//           <FaGoogle/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//         <FaGithub/>
//       </MDBBtn>

//     </div>
//     <br></br>
//     <p style={{textAlign: "center"}}>Already have an account: </p>
//     <div class="d-grid gap-2 col-6 mx-auto">
// <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={() =>{props.setLoginForm(true)}}>Login</button>
//      </div>
   
//   </MDBCardBody>
// </MDBCard>

// </MDBCol>

// </MDBRow>
//       </MDBRow>
      
//     </MDBContainer>
//     </BrowserRouter>
//   );
// }

// export default SignUp;




import React from "react";
import SignUpAdmin from "./SignupAdmin";
import SignUpUser from "./SignupUser";
function SignUp(props){
    return (
        <div>
        <SignUpAdmin setLoginForm = {props.setLoginForm} />
        <SignUpUser setLoginForm = {props.setLoginForm}/>
        </div>
    )
}
export default SignUp;

