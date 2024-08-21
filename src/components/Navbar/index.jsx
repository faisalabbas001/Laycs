import React from "react";
import ConnectButton from "./ConnectButton";
const Navbar = () => {
  return (
    <nav className="bg-[white] shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo */}
         <div className="flex  justify-between m-5 items-center">  
    <img  
        className="h-auto w-full max-w-xs md:max-w-sm lg:max-w-md cursor-pointer"  
        src="/logo.svg" // Replace with your logo path  
        alt="Logo"  
        
    />  
</div>  

          {/* Right Side: Connect Wallet Button */}
        <ConnectButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
