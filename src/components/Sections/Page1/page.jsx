import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrCaretNext } from "react-icons/gr";
const Page1 = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imageSrc) => {
    // Check if the image is already selected
    if (!selectedImages.includes(imageSrc)) {
      setSelectedImages([...selectedImages, imageSrc]);
    }
  };

  const handleNextClick = () => {
    if (selectedImages.length > 0) {
      navigate('/page2', { state: { selectedImages } });
    } else {
      alert('Please select at least one image');
    }
  };

  const imageUrls = [
    '/pic1.jpg', '/pic2.jpg', '/pic3.jpg', '/pic5.jpg', '/pic6.jpg', '/pic7.jpg', '/pic8.jpg' ,'/pic9.jpg', '/pic1.jpg', '/pic3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <>
      <div className="grid-section  ">
        {imageUrls.map((imageSrc, index) => (
          <div className="card" key={index}>
            <div className="image-container" style={{ position: 'relative' }}>
              <img
                src={imageSrc}
                width={300}
                height={100}
                alt={`Placeholder ${index + 1}`}
                onClick={() => handleImageClick(imageSrc)}
                style={{ cursor: 'pointer', border: selectedImages.includes(imageSrc) ? '3px solid red' : 'none' }}
              />
              {selectedImages.includes(imageSrc) && (
                <div
                  className="image-overlay"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 0, 0, 0.6)', // Red background
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedImages.indexOf(imageSrc) + 1} {/* Show selection number */}
                </div>
              )}
            </div>
            <h1 className='font-bold text-2xl'>Pizza  </h1>
            <p>Some description text for card {index + 1} Some description text for card {index + 1}.</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-2 p-4">
  <button className="bg-black text-white px-4 py-2 rounded-md text-base sm:px-6 sm:py-3 sm:text-lg" onClick={handleNextClick}>
    Next
  </button>
  <GrCaretNext />
</div>

    </>
  );
};

export default Page1;
