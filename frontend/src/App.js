import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import Notify from './Pages/Notify';

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
    <>
    <Notify/>
    <Dashboard/>
  
    <HomePage/>
     </>
  );
}

export default App;
