import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page1 from './components/Sections/Page1/page';
import Page2 from './pages/Page2';
import './App.css';

function App() {
  return (

    <div className='bg-[#EEEEEE]'>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/"   element={<Page1 />} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
