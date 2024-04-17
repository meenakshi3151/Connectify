import React from "react";
import Profile from "../Components/Profile";
import NavbarDash from "../Components/NavbarDash";
import SearchUserCard from "../Components/SearchUserCard";
function Dashboard(){
    return (
        <>     
        <NavbarDash/>
        <Profile/>
  <SearchUserCard/>     
        
        </>
    )
}
export default Dashboard;