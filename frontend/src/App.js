// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';
// import HomePage from './Pages/HomePage';
// import Dashboard from './Pages/Dashboard';
// import LoginPage from './Components/LoginPage';
// import SignUp from './Components/Signup';
// import EditProfile from './Components/Editprofile';
// import CreatePost from './Components/CreatePost';
// import ShowPosts from './Components/ShowPosts';
// import Addphoto from './Components/Addphoto';
// import { AuthProvider } from './contexts/Authcontexts';
// import { UserContextProvider } from './contexts/UserContext';
// function App() {
//   return (
//     <UserContextProvider>
//   <Router>
//   <AuthProvider>
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/register" element={<SignUp/>}/>
//       <Route path="/editprofile" element={<EditProfile/>}/>
//       <Route path="/add-photo" element={<Addphoto/>}/>
//       <Route path='/showAllPosts' element={<ShowPosts/>}/>
//       <Route path="/" element={<HomePage/>}/>
//       <Route path='/addPost' element={<CreatePost/>}/>
//       {/* <Route path='/showAllPosts' element={<ShowPosts/>}/> */}
//       {/* Other routes */}
//     </Routes>
//     </AuthProvider>
//   </Router>
//   </UserContextProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Components/LoginPage';
import CreatePost from './Components/CreatePost';
import EditProfile from "./Components/Editprofile"
import ShowPosts from './Components/ShowPosts';
import SignUp from './Components/Signup';
import RequireAuth from './Components/RequireAuth';
import UserPosts from './Components/Userposts';
import Addphoto from './Components/AddPhoto';
import { AuthProvider } from './contexts/Authcontexts';
function App() {
  return (
  <Router>
    <AuthProvider>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          // <RequireAuth>
            <Dashboard />
          // {/* </RequireAuth> */}
        }
      />
      
      <Route path="/" element={
        
      <HomePage/>
     
      }/>
      <Route path='/addPost' element={<CreatePost/>}/>
      <Route path='/showAllPosts' element={<ShowPosts/>}/>
      <Route path='/getUserPosts' element={<UserPosts/>}></Route>
     <Route path='/editprofile' element={<EditProfile/>}/>
     <Route path='/add-photo' element={<Addphoto/>}/>
     <Route path="/register" element={<SignUp/>}/>
    </Routes>
    </AuthProvider>
  </Router>
  );
}

export default App;