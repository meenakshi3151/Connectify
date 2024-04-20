// import React from "react";
// import Profile from "../Components/Profile";
// import NavbarDash from "../Components/NavbarDash";
// import SearchUserCard from "../Components/SearchUserCard";
// import img1 from "../images/one.jpg"
// function Dashboard(){
//     return (
//         <>   
        
//         <NavbarDash/>
//         <img src={img1}  alt="Blog Image" class="h-screen w-screen bg-cover"/>  
//         <Profile/>
//         </>
//     )
// }
// export default Dashboard;

import React from "react";
import Profile from "../Components/Profile";
import NavbarDash from "../Components/NavbarDash";
import SearchUserCard from "../Components/SearchUserCard";
import img1 from "../images/one.jpg";

function Dashboard() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <NavbarDash />
            <img src={img1} alt="Blog Image" className="h-screen w-screen bg-cover" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                <Profile />
            </div>
        </div>
    );
}

export default Dashboard;
