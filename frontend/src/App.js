import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Components/LoginPage';
import CreatePost from './Components/CreatePost';
import ShowPosts from './Components/ShowPosts';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage/>}/>
      <Route path='/addPost' element={<CreatePost/>}/>
      <Route path='/showAllPosts' element={<ShowPosts/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;
