import React, { useState } from 'react'

function Counter({ count, increment, decrement, reset }) {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <h1 className='text-lg'>Count: <span className='text-red-500 text-lg font-bold'> {count}</span></h1>
      <div className='flex gap-4 justify-center'>
        <button className="bg-red-600 p-2 rounded-lg text-white text-lg font-semibold" onClick={increment}>Increment</button>
        <button className="bg-blue-600 p-2 rounded-lg text-white text-lg font-semibold" onClick={decrement}>Decrement</button>
        <button className="bg-green-600 p-2 rounded-lg text-white text-lg font-semibold" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 5);
  }
  function handleDecrement() {
    setCount(count - 2);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="h-screen bg-orange-500 flex items-center justify-center p-60">
      <div className="max-w-3xl mx-auto text-center bg-gray-100 p-6 rounded-lg shadow-lg h-auto">
        <h1 className='font-bold text-3xl text-green-400'>Simple Counter App</h1>
        <Counter
          count={count}
          increment={handleIncrement}
          decrement={handleDecrement}
          reset={handleReset}
        />
      </div>
    </div>
  )
}

export default App