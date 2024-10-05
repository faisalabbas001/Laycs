import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi'; 
import { GrCaretNext } from 'react-icons/gr';
import Results from './api';

const Page1 = () => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered card
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setData(Results);
  }, []);

  useEffect(() => {
    if (!isConnected) {
      navigate('/SignUp');
    }
  }, [isConnected, navigate]);

  const handleSelect = (item) => {
    const isSelected = selectedItems.find(selected => selected.id === item.id);
    if (isSelected) {
      setSelectedItems(prev => prev.filter(selected => selected.id !== item.id));
    } else {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  const handleNextClick = () => {
    if (selectedItems.length > 0) {
      navigate('/page2', { state: { selectedItems } });
    } else {
      alert('Please select at least one image before proceeding.');
    }
  };

  return (
    <>
      <div className="grid-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((item, index) => {
          const isSelected = selectedItems.find(selected => selected.id === item.id);
          const selectionOrder = selectedItems.findIndex(selected => selected.id === item.id) + 1;

          return (
            <div 
              key={item.id} 
              className={`card relative border-4 ${isSelected ? 'border-red-500' : 'border-transparent'}`}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => setHoveredIndex(index)} // Set hover index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)}  // Reset hover index on mouse leave
              style={{ cursor: 'pointer' }}
            >
              <div className="image-container relative">
                <img 
                  src={hoveredIndex === index ? item.hoverImage : item.image} // Change image on hover
                  alt={`Image for ${item.title}`} 
                  className="w-full h-auto"
                />
                {isSelected && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white font-bold p-1 rounded-full">
                    {selectionOrder}
                  </div>
                )}
              </div>
              <h1 className="font-bold text-xl sm:text-2xl mt-2">{item.title}</h1>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center space-x-2 p-6">
        <button 
          className="bg-black text-white px-6 py-3 rounded-md text-lg sm:text-xl"
          onClick={handleNextClick}
          disabled={selectedItems.length === 0}
        >
          Next
        </button>
        <GrCaretNext size={24} />
      </div>
    </>
  );
};

export default Page1;
