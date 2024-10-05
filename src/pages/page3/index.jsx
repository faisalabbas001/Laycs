import { useLocation } from 'react-router-dom';

const Page3 = () => {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] };

  return (
    <div className="grid-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {selectedItems.length > 0 ? (
        selectedItems.map((item) => (
          <div key={item.id} className="card">
            <div className="image-container">
              <img 
                src={item.hoverImage} // Display hover image here
                alt={`Hover image for ${item.title}`} 
                className="w-full h-auto" 
              />
            </div>
            <h1 className="font-bold text-xl sm:text-2xl mt-2">{item.title}</h1>
            <p className="text-gray-700 mt-1">{item.description}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">No items available to display.</p>
      )}
    </div>
  );
};

export default Page3;
