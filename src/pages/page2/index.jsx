import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

const Page2 = () => {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] };
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      navigate('/SignUp');
    }
  }, [isConnected, navigate]);

  const handleConvert = () => {
    navigate('/page3', { state: { selectedItems } });
  };

  return (
    <>
      <div className="grid-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <div key={item.id} className="card">
              <div className="image-container">
                <img 
                  src={item.image} 
                  alt={`Image for ${item.title}`} 
                  className="w-full h-auto" 
                />
              </div>
              <h1 className="font-bold text-xl sm:text-2xl mt-2">{item.title}</h1>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No items selected. Please go back and select some items.</p>
        )}
      </div>

      <div className="flex items-center justify-center space-x-2 p-6">
        <button 
          className="bg-black text-white px-6 py-3 rounded-md text-lg sm:text-xl"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
    </>
  );
};

export default Page2;
