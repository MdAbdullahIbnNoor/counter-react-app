import Calculator from "./Calculator";
import Counter from "./Counter";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4 flex flex-col items-center">
      <h1 className="text-3xl text-blue-800 mb-6 mt-4">
        Simple Modular Counter & Calculator App
      </h1>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Counter />
        <Calculator/>
        


      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Application refactored into two reusable components: Counter and Calculator.
      </p>
    </div>
  );
}

export default App;
