import React from "react";

function SearchUserCard(props) {

  const handleFriendRequest = async () => {
    console.log("Friend Request Sent to: ", props.name);
  }
  console.log("hi"+props);
  return (
    <div className="w-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row items-center pb-4">
        <span className="text-lg text-black dark:text-gray-300">
          {props.name}
        </span>
      </div>
      <div className="flex items-center justify-between px-4">
       <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleFriendRequest}>Add</button>
      </div>
    </div>
  );
}

export default SearchUserCard;
