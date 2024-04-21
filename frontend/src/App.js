import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Components/LoginPage';
import CreatePost from './Components/CreatePost';
import EditProfile from './Components/EditProfile';
import ShowPosts from './Components/ShowPosts';
import RequireAuth from './Components/RequireAuth';

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
          // </RequireAuth>
        }
      />
      
      <Route path="/" element={
        
      <HomePage/>
     
      }/>
      <Route path='/addPost' element={<CreatePost/>}/>
      <Route path='/showAllPosts' element={<ShowPosts/>}/>
     <Route path='/editprofile' element={<EditProfile/>}/>
     <Route path='add-photo' element={<Addphoto/>}/>
    </Routes>
    </AuthProvider>
  </Router>
  );
}

export default App;
