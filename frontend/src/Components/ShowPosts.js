
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash';
import { useToast } from "@chakra-ui/react";

function ShowPosts() {
  const toast = useToast();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [data, setData] = useState([]);
  const [postEmails, setPostEmails] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({}); // State to store comments for each post

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const getName = (id) => {
    axios.get('http://localhost:5000/getName', {
      params: { id: id },
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

  const getComments = (postId) => {
    axios.get(`http://localhost:5000/comments/${postId}`, config)
      .then((res) => {
        setComments(prevState => ({
          ...prevState,
          [postId]: res.data
        }));
      }).catch(error => {
        console.log("Error fetching comments:", error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/showAllPosts', config)
      .then((res) => {
        setData(res.data.posts);
        res.data.posts.forEach(post => {
          getName(post.PostedBy);
          getComments(post._id); // Fetch comments for each post
        });
      }).catch(error => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  const createcomment = async (e, postId) => {
    e.preventDefault();
    try {
      const commentData = {
        comment: comment,
        author: userInfo.name,
        postId: postId,
        userId: userInfo._id
      };

      const res = await axios.post("http://localhost:5000/createcomment", commentData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status === 200) {
        toast({
          title: "Comment added",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        getComments(postId);
         console.log(res) // Refresh comments for the post
        setComment(""); // Clear the input field
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      toast({
        title: "Error",
        description: "Failed to add comment",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const toggleReaction = async (postId, reaction) => {
    try {
      const res = await axios.post("http://localhost:5000/updatereaction", {
        postId: postId,
        userId: userInfo._id,
        reaction: reaction
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.status === 200) {
        const updatedPost = res.data.post;
        setData(prevData =>
          prevData.map(post => post._id === updatedPost._id ? updatedPost : post)
        );
        toast({
          title: "Reaction updated",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.error("Error updating reaction:", error);
      toast({
        title: "Error",
        description: "Failed to update reaction",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <NavbarDash />
      {data.map((item) => (
        <div className="container mx-auto px-20" key={item._id}>
          <div className="p-3 px-6 min-h-48 flex justify-center items-center">
            <div className="rounded-md shadow-md sm:w-full bg-coolGray-900 text-coolGray-100">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <img src={userInfo.post} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
                  <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">{postEmails[item.PostedBy]}</h2>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <img alt="" src={`data:${item.PhotoType};base64,${item.Photo}`} />
              </div>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="text-base font-semibold"></span> {item.Body}
                </p>
                <div className="w-full flex flex-col mt-4 md:flex-row">
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    placeholder="Write a comment"
                    className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
                  />
                  <button
                    onClick={(e) => createcomment(e, item._id)}
                    className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
                  >
                    Add Comment
                  </button>
                </div>
                <div className="mt-4">
                  {comments[item._id] && comments[item._id].map((comment) => (
                    <div key={comment._id} className="p-2 bg-gray-800 rounded-md mb-2">
                      <p><strong>{comment.author}:</strong> {comment.comment}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center pt-3 pb-1">
                  <button
                    onClick={() => toggleReaction(item._id, '👍')}
                    className="bg-blue-500 text-sm text-white px-2 py-2"
                  >
                    👍 {item.reactions && item.reactions['👍'] ? item.reactions['👍'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '❤️')}
                    className="bg-red-500 text-sm text-white px-2 py-2"
                  >
                    ❤️ {item.reactions && item.reactions['❤️'] ? item.reactions['❤️'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '😮')}
                    className="bg-yellow-500 text-sm text-white px-2 py-2"
                  >
                    😮 {item.reactions && item.reactions['😮'] ? item.reactions['😮'].length : 0}
                  </button>
                  <button
                    onClick={() => toggleReaction(item._id, '😢')}
                    className="bg-blue-500 text-sm text-white px-2 py-2"
                  >
                    😢 {item.reactions && item.reactions['😢'] ? item.reactions['😢'].length : 0}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowPosts;
