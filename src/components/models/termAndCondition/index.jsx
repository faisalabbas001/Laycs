import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const TermAndConditions = ({ onClose }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleContinue = () => {
    if (checked) {
      navigate('/'); 
      onClose();
    } else {
      alert('Please agree to the terms by checking the box.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition-transform duration-300 transform hover:scale-105" // Added scaling effect on hover
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.5 }} 
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h2>
        <p className="text-gray-600 mb-4">
          Your wallet has been successfully connected. Please read and agree to the terms and conditions below to continue.
        </p>
        
        <div className="flex items-center mb-4">
          <input 
            type="checkbox" 
            id="agree" 
            checked={checked} 
            onChange={handleCheckboxChange}
            className="mr-2 text-red-600 focus:ring-red-500 rounded border-gray-300"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">I agree to the terms and conditions</label>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button 
            className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-500 transition duration-300 ease-in-out"
            onClick={handleContinue}
          >
            Continue
          </button>
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TermAndConditions;
