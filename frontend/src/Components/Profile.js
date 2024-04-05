// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import { FaStar, FaComments, FaClock} from 'react-icons/fa';

// export default function Profile() {
//   return (
//     <div className="vh-100" style={{ backgroundColor: '#eee' }}>
//       <MDBContainer>
//         <MDBRow className="justify-content-center">
//           <MDBCol md="9" lg="7" xl="5" className="mt-5">
//             <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
//               <MDBCardBody className="p-4 text-black">
//                 <div>
//                   <MDBTypography tag='h6'>Exquisite hand henna tattoo</MDBTypography>
//                   <div className="d-flex align-items-center justify-content-between mb-3">
//                     <p className="small mb-0"><FaClock/>3 hrs</p>
//                     <p className="fw-bold mb-0">$90</p>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center mb-4">
//                   <div className="flex-shrink-0">
//                     <MDBCardImage
//                       style={{ width: '70px' }}
//                       className="img-fluid rounded-circle border border-dark border-3"
//                       src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
//                       alt='Generic placeholder image'
//                       fluid />
//                   </div>
//                   <div className="flex-grow-1 ms-3">
//                     <div className="d-flex flex-row align-items-center mb-2">
//                       <p className="mb-0 me-2">@sheisme</p>
//                       <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
//                         <li>
//                           <FaStar/>
//                         </li>
//                         <li>
//                           <FaStar/>
//                         </li>
//                         <li>
//                           <FaStar/>
//                         </li>
//                         <li>
//                           <FaStar/>
//                         </li>
//                         <li>
//                           <FaStar/>
//                         </li>
//                       </ul>

//                     </div>
//                     <div>
//                       <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn>
//                       <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn>
//                       <MDBBtn outline color="dark" floating size="sm"><FaComments/></MDBBtn>
//                     </div>
//                   </div>
//                 </div>
//                 <hr />
//                 <MDBCardText>52 comments</MDBCardText>
//                 <MDBBtn color="success" rounded block size="lg">
//                   <FaClock/> Book now
//                 </MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }

import { useContext, useEffect, useState } from "react"
import Footer from "./Footer"
import NavBar from "./Navbar"

import axios from "axios"
// import { IF, URL } from "../url"
import { UserContext } from "../Context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
import "../profile.css"

const Profile = () => {
//   const param=useParams().id
//   const [username,setUsername]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const {user,setUser}=useContext(UserContext)
//   const navigate=useNavigate()
//   const [posts,setPosts]=useState([])
//   const [updated,setUpdated]=useState(false)
// //   // console.log(user)

// const fetchProfile=async ()=>{
//   try{
//      const res=await axios.get(URL+"/api/users/"+user._id)
//      setUsername(res.data.username)
//      setEmail(res.data.email)
//      setPassword(res.data.password)
//   }
//   catch(err){
//      console.log(err)
//   }
// }

// const handleUserUpdate=async ()=>{
//   setUpdated(false)
//   try{
//     const res=await axios.put(URL+"/api/users/"+user._id,{username,email,password},{withCredentials:true})
//     // console.log(res.data)
//     setUpdated(true)

//   }
//   catch(err){
//     console.log(err)
//     setUpdated(false)
//   }

// }

// const handleUserDelete=async()=>{
//   try{
//     const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
//     setUser(null)
//     navigate("/")
//     // console.log(res.data)

//   }
//   catch(err){
//     console.log(err)
//   }
// }
// // console.log(user)
// const fetchUserPosts=async ()=>{
//   try{
//     const res=await axios.get(URL+"/api/posts/user/"+user._id)
//     // console.log(res.data)
//     setPosts(res.data)


//   }
//   catch(err){
//     console.log(err)
//   }
// }

// useEffect(()=>{
//   fetchProfile()

// },[param])

// useEffect(()=>{
//   fetchUserPosts()

// },[param])

  return (
    <div>
      
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Edit profile:</h1>
          {/* {posts?.map((p)=>(
            <ProfilePosts key={p._id} p={p}/>
          ))} */}
        </div>
        <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
        <div className=" flex flex-col space-y-4 items-start">
        <h1 className="text-xl font-bold mb-4">Profile</h1>
          <input   className="outline-none px-4 py-2 text-gray-500" placeholder="Your username" type="text"/>
          <input  className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="email"/>
          {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/> */}
          <div className="flex items-center space-x-4 mt-8">
            <button  className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>
          </div>
          {/* {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>} */}
        </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile