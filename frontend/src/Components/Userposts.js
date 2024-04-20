import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';

function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [postEmails, setPostEmails] = useState({});
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getUserPosts/${userInfo._id}`, {
          headers: {
            // Add any necessary headers here
          }
        });

        // Extract user posts data from the response
        const fetchedUserPosts = response.data;

        // Update state with fetched user posts
        setUserPosts(fetchedUserPosts);
        setLoading(false);
      } catch (error) {
        // Handle error if request fails
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserPosts(); // Call fetchUserPosts function when component mounts

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup, if needed
    };
  }, []);

  return (
    <>
      <NavbarDash />
      {/* {userPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.Title}</h2>
          <p>{post.Body}</p>
          <div class="p-3">
                    <img alt="" src={`data:${post.PhotoType};base64,${post.Photo}`} />
                  </div>
        
        </div>
      ))} */}

      {userPosts.map((post) => (
        <div class="container mx-auto px-20" key={post._id}>
          <div>
            <div class="p-3 px-6 min-h-48 flex justify-center items-center">
              <custom-card3>
                <div class="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
                  <div class="flex items-center justify-between p-3">
                    <div class="flex items-center space-x-2">
                      <img src={userInfo.post} alt="" class="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
                      <div class="-space-y-1">
                        <h2 class="text-sm font-semibold leading-none">{postEmails[post.PostedBy]}</h2>
                      </div>
                    </div>
                    <button title="Open options" type="button"></button>
                  </div>
                  <div class="p-3">
                    <img alt="" src={`data:${post.PhotoType};base64,${post.Photo}`} />
                  </div>
                  <div class="flex flex-wrap items-center pt-3 pb-1">
                    <div class="flex items-center space-x-2">
                    </div>
                  </div>
                  <div class="space-y-3">
                    <p class="text-sm">
                      <span class="text-base font-semibold">	</span> {post.Body}
                    </p>
                    <input type="text" placeholder="Add a comment..." class="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-coolGray-100" />
                  </div>
                </div>
              </custom-card3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserPosts;
