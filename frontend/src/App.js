import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import Notify from './Pages/Notify';
import LoginPage from './Components/LoginPage';
function App() {
  return (
    // <Router>
    // //   <Routes>
    // //     <Route path="/" element={<HomePage />} />
    // //     </Routes>
      
    // // </Router>
  //   <Router>
  //   {/* <div> */}
  //     <Routes>
  //     <Route  path="/" element={HomePage} />
  //     {/* <Route path="/about" component={About} /> */}
  //     {/* <Route path="/contact" component={Contact} /> */}
  //     </Routes>
  //   {/* </div> */}
  // </Router>
    // <>
    // <Notify/>
    // <Dashboard/>
  
    // <HomePage/>
    //  </>
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage/>}/>
      {/* Other routes */}
    </Routes>
  </Router>
  );
}

export default App;
