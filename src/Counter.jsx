import React, { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="p-4 bg-white border border-gray-400">
      <h2 className="text-2xl text-gray-700 mb-4 border-b pb-2 border-green-500 text-center">
        Count Feature
      </h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-6xl p-3 bg-gray-100 text-black w-full text-center">
          {count}
        </div>
        <div className='flex space-x-2 w-full justify-center'>
          <button
            onClick={handleIncrement}
            className="flex-1 bg-green-500 text-white p-2 text-lg"
          >
            + 1
          </button>

          <button
            onClick={handleDecrement}
            className="flex-1 bg-red-500 text-white p-2 text-lg"
          >
            - 1
          </button>
        </div>
        
        <button
          onClick={handleReset}
          className="w-full bg-gray-500 text-white p-2 text-lg"
        >
          Reset to 0
        </button>
      </div>
    </div>
  );
};

export default Counter;