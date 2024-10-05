import React, { useState, useEffect } from 'react';
import ConnectButton from '../../components/Navbar/ConnectButton';
import TermAndConditions from "../../components/models/termAndCondition/index";
import { useAccount } from 'wagmi';

const SignUp = () => {
  const { isConnected } = useAccount(); 
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    console.log('Wallet status changed:', isConnected);
    if (isConnected) {
      setShowPopup(true); 
    }
  }, [isConnected]);

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img 
          src="/signup1.jpg" 
          alt="Signup Image" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/buttonbg.jpg')" }} />
        
        <div className="relative z-10">
          <ConnectButton />
        </div>
      </div>

      {showPopup && <TermAndConditions onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default SignUp;
