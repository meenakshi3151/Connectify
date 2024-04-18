
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';

function ShowPosts() {
const userInfo = JSON.parse (localStorage.getItem("userInfo"));
  const [data, setData] = useState([]);
  const [postEmails, setPostEmails] = useState({});

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const getName = (id) => {
    axios.get('http://localhost:5000/getName', {
      params: {
        id: id
      },
      config
    }).then((res) => {
      setPostEmails(prevState => ({
        ...prevState,
        [id]: res.data 
      }));
    }).catch(error => {
      console.log("Error fetching email:", error);
    });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/showAllPosts', config)
      .then((res) => {
        setData(res.data.posts);
        res.data.posts.forEach(post => {
          getName(post.PostedBy);
        });
      }).catch(error => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  return (
    <>
      <NavbarDash />
      {data.map((item) => (
        <div class="container mx-auto px-20" key={item._id}>
          <div>
            <div class="p-3 px-6 min-h-48 flex justify-center items-center">
              <custom-card3>
                <div class="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
                  <div class="flex items-center justify-between p-3">
                    <div class="flex items-center space-x-2">
                      <img src={userInfo.post} alt="" class="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
                      <div class="-space-y-1">
                        <h2 class="text-sm font-semibold leading-none">{postEmails[item.PostedBy]}</h2>
                      </div>
                    </div>
                    <button title="Open options" type="button"></button>
                  </div>
                  <div class="p-3">
                    <img alt="" src={`data:${item.PhotoType};base64,${item.Photo}`} />
                  </div>
                  <div class="flex flex-wrap items-center pt-3 pb-1">
                    <div class="flex items-center space-x-2">
                    </div>
                  </div>
                  <div class="space-y-3">
                    <p class="text-sm">
                      <span class="text-base font-semibold">	</span> {item.Body}
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
  )
}

export default ShowPosts;
