import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAccount } from 'wagmi'; 
import Navbar from './components/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/page2';
import SignUp from './pages/SignUp';
import PageNotFound from './components/page-not-found/index'; 
import './App.css';
import Page3 from './pages/page3';
function Layout({ children }) {
  const { isConnected } = useAccount(); 
  const location = useLocation(); 

  const isSignUpPage = location.pathname === '/SignUp';

  return (
    <>
      {!isSignUpPage && isConnected && <Navbar />}
      {children}
    </>
  );
}

function App() {
  const { isConnected } = useAccount(); 

  return (
    <div className='bg-[#EEEEEE] min-h-screen'>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={isConnected ? <Page1 /> : <Navigate to="/SignUp" />} 
            />
            <Route 
              path="/page2" 
              element={isConnected ? <Page2 /> : <Navigate to="/SignUp" />} 
            />
             <Route 
              path="/page3" 
              element={isConnected ? <Page3 /> : <Navigate to="/SignUp" />} 
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
