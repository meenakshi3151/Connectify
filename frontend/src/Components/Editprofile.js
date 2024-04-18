
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';
import { useToast } from "@chakra-ui/toast";

const EditProfile = () => {
  const toast = useToast();

  const userInfo = JSON.parse (localStorage.getItem("userInfo"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
      // Assuming position is status for admins
    }
  , []);

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    if (!email || !name || !phone) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.put(
        "http://localhost:5000/editProfile",
        {
          email: email,
          name: name,
          phone: phone,
          id: userInfo._id,
        },
        config
      );
      console.log("Response:", response);
      if (response.status === 200) {
        toast({
          title: "Profile Updated Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };


  const containerStyle = {
    background: '#BA68C8',
  };

  const backHoverStyle = {
    color: '#682773',
    cursor: 'pointer',
  };

  return (
    <>
      <NavbarDash />
      <div className="container rounded bg-white mt-5" style={containerStyle}>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {/* <img className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" alt="Profile" /> */}
              <img className="rounded-circle mt-5" src={userInfo.post} width="90" alt="Profile" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back" style={backHoverStyle}>
                  <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <h6 className="text-right">Edit Profile</h6>
                </div>
              </div>
              <div className="row mt-2">
                <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Your username" className="outline-none px-4 py-2 text-gray-500" type="text" />
              </div>
              <div className="row mt-3">
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="email" />
                <div className="col-md-6"><input onChange={(e) => setPhone(e.target.value)} value={phone} className="outline-none px-4 py-2 text-gray-500" placeholder="Your phoneno" type="phone" /></div>
              </div>
              {userInfo.role === "admin" && status !== undefined &&
                <div className="row mt-3">
                  <div className="col-md-6"><input type="text" className="form-control" placeholder="Designation" /></div>
                  <div className="col-md-6"><input onChange={(e) => setStatus(e.target.value)} value={status} className="outline-none px-4 py-2 text-gray-500" placeholder="Your status" type="text" /></div>
                </div>
              }
              <div className="mt-5 text-middle"><button onClick={handleUserUpdate} className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-8">
        {/* <button onClick={handleUserDelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button> */}
      </div>
      <div>
        {/* {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>} */}
      </div>
    </>
  );
}

export default EditProfile;
