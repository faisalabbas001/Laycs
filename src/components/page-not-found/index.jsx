import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900 text-white p-6">
      <div className="text-center space-y-6">
        <img
          src="/pagenotfound.jpg"
          alt="Page Not Found"
          className="max-w-md md:max-w-lg mx-auto mb-6 opacity-80 shadow-2xl rounded-lg"
        />
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-100 tracking-wider mb-2">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-gradient-to-r from-gold to-yellow-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-gold focus:ring-opacity-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
