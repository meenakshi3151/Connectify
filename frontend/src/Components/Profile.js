import React, { useContext, useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
 
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  
  const userInfo = JSON.parse (localStorage.getItem("userInfo"));

console.log(userInfo)

 
  const handleFollow = async () => {
    try {
     
      const response = await axios.post(`${URL}/follow`);
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const updateUserProfile = async (userDataToUpdate) => {
    try {
      const response = await axios.put(`http://localhost:5000/profile/${userInfo._id}, userDataToUpdate`);
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error; 
    }
  };
  
  const handleAddPhoto = async (event) => {
    const selectedPhoto = event.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', selectedPhoto);
  
    try {
     
      const response = await axios.post('http://localhost:5000/upload-profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { imageUrl } = response.data;
      setProfileImage(imageUrl);
  
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
    return (
      <div className="row g-2">
        {userInfo.posts ? (
          userInfo.posts.map(photo => (
            <div className="col mb-2" key={photo.id}>
              <img src={photo.url} alt={photo.description} className="w-100 rounded-3" />
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
    
      

    
  };

 
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
         
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {profileImage && <img src={profileImage} alt="Profile" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: '150px', zIndex: 1 }} />}
                  <input type="file" accept="image/*" onChange={handleAddPhoto} style={{ zIndex: 1 }} />
                  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }} onClick={() => navigate('/editprofile')}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h5>{userInfo.name}</h5>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                 
                    <div>
                    <p className="ml-3 mb-1 h5">{userInfo.post ? userInfo.post.length:0}</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">{userInfo.followers ? userInfo.followers.length : 0}</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{userInfo.following ? userInfo.following.length : 0}</p>
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