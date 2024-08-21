import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";

const Page2 = () => {
  const location = useLocation();
  const { selectedImages } = location.state || { selectedImages: [] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = () => {
      const randomImage = `https://picsum.photos/200/300?random=${Math.random()}`;
      setRandomImageUrl(randomImage);
    };

    fetchRandomImage();
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  if (selectedImages.length === 0) {
    return <p className="text-center">No images selected</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EEEEEE] px-4">
      {/* Image Display */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white shadow-lg rounded-md py-6 gap-4">
        <img 
          src={selectedImages[currentIndex]} 
          alt={`Selected ${currentIndex + 1}`} 
          className="w-full md:w-1/2 max-h-96 object-cover rounded-md shadow-lg" 
        />
        {currentIndex < selectedImages.length - 1 && (
          <>
            <SiConvertio className="text-5xl text-gray-600 my-4 md:my-0" />
            <img 
              src={randomImageUrl} 
              alt="Random Image" 
              className="w-full md:w-1/2 max-h-96 object-cover rounded-md shadow-lg" 
            />
          </>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-black text-white px-4 py-2 rounded-md">Convert</button>
      </div>

      {/* Navigation Icons */}
      <div className="flex gap-6 mt-8">
        <FaArrowLeftLong
          onClick={handlePrevious}
          className="text-4xl text-gray-600 cursor-pointer"
        />
        {selectedImages.length > 1 && (
          <FaArrowRightLong
            onClick={handleNext}
            className="text-4xl text-gray-600 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Page2;
