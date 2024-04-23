import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from "./NavbarDash";
import { useToast } from "@chakra-ui/toast";

const EditProfile = () => {
  const toast = useToast();

  // Retrieve user information from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
      setStatus(userInfo.status);
    }
  }, []);

  const handleUserUpdate = async (e) => {
    e.preventDefault();

    if (!email || !name || !phone) {
      toast({
        title: "Please fill all the fields",
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
          email,
          name,
          phone,
          id: userInfo._id,
        },
        config
      );

      if (response.status === 200) {
        // Update localStorage with new information
        const updatedUserInfo = {
         
          email,
          name,
          phone,
        };
       console.log(updatedUserInfo)
        localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

        toast({
          title: "Profile updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
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

  return (
    <>
 <NavbarDash/>
      <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src={userInfo.post}
                width="90"
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <div className="row mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Your username"
                  type="text"
                />
              </div>
              <div className="row mt-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Your email"
                  type="email"
                />
                <div className="col-md-6">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Your phone number"
                    type="phone"
                  />
                </div>
              </div>
              <div className="mt-5 text-middle">
                <button
                  onClick={handleUserUpdate}
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
