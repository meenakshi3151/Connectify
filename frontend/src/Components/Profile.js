

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null); // State to store the profile image
  const { user } = useContext(UserContext); // Access user object from UserContext
  const userId = '6617672152877ee8112000a3'; // Assuming user ID is stored in user object

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // Include userId in the dependency array

  const handleFollow = async () => {
    try {
      // Perform follow action here, for example:
      // const response = await axios.post(${URL}/api/follow, { userIdToFollow: userData.id });
      // Handle the response accordingly
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const updateUserProfile = async (userDataToUpdate) => {
    try {
      // Assuming you have an API endpoint to update user profile
      const response = await axios.put(`http://localhost:5000/profile/${userId}`, userDataToUpdate);
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error; // Optionally, re-throw the error for error handling further up the call stack
    }
  };
  
  const handleAddPhoto = async (event) => {
    const selectedPhoto = event.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', selectedPhoto);
  
    try {
      // Assuming you have an API endpoint to upload the profile image
      const response = await axios.post('http://localhost:5000/upload-profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      // Assuming the response contains the URL of the uploaded profile image
      const { imageUrl } = response.data;
  
      // Set the profile image URL in state or context to display it
      setProfileImage(imageUrl);
  
      // Optionally, you can update the user's profile with the new profile image URL
      // This step depends on your backend implementation
      await updateUserProfile({ profileImageUrl: imageUrl });
  
      // Optionally, show a success message to the user
      alert('Profile image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading profile image:', error);
      // Optionally, show an error message to the user
      alert('Error uploading profile image. Please try again later.');
    }
  };

  const renderFollowButton = () => {
    // Logic to determine whether to show the follow button
    // For example, if the logged-in user is already following this user, hide the follow button
    const isFollowing = false; // Placeholder for logic, replace with actual logic

    if (!isFollowing) {
      return (
        <button className="btn btn-primary" onClick={handleFollow}>Follow</button>
      );
    } else {
      return (
        <button className="btn btn-secondary" disabled>Following</button>
      );
    }
  };

  const renderPhotos = () => {
    if (!userData.photos || userData.photos.length === 0) {
      return (
        <div className="alert alert-warning">No photos posted yet. <button className="btn btn-primary" onClick={() => navigate('/add-photo')}>Add Photo</button></div>
      );
    } else {
      return (
        <div className="row g-2">
          {userData.photos.map(photo => (
            <div className="col mb-2" key={photo.id}>
              <img src={photo.url} alt={photo.description} className="w-100 rounded-3" />
            </div>
          ))}
        </div>
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error fetching user data</div>;
  }

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              {/* Profile card content */}
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {profileImage && <img src={profileImage} alt="Profile" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: '150px', zIndex: 1 }} />}
                  <input type="file" accept="image/*" onChange={handleAddPhoto} style={{ zIndex: 1 }} />
                  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }} onClick={() => navigate('/editprofile')}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h5>{userData.name}</h5>
                  <p>{userData.location}</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="small text-muted mb-0">@{userData.name}</p>
                    </div>
                    <div>
                    <p className="ml-3 mb-1 h5">{userData.photos ? userData.photos.length : 0} Photos</p>
                    
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">{userData.followers}</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{userData.following}</p>
                    <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                {/* Conditional rendering of follow button */}
                {renderFollowButton()}
                {/* Conditional rendering of photos */}
                {renderPhotos()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;