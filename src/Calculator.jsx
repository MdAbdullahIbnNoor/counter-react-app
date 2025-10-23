import { useState } from "react";

const Calculator = () => {
    // State for the two input numbers and the result
    const [num1, setNum1] = useState('');
    // num1 = ""
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    // Function to perform the calculation based on the operation
    // const handleCalculate = (operation) => {
    //     const value1 = parseFloat(num1) || 0;
    //     const value2 = parseFloat(num2) || 0;
    //     let newResult;

    //     switch (operation) {
    //         case 'add':
    //             newResult = value1 + value2;
    //             setResult(newResult);
    //             break;
    //         case 'subtract':
    //             newResult = value1 - value2;
    //             setResult(newResult);
    //             break;
    //         case 'multiply':
    //             newResult = value1 * value2;
    //             setResult(newResult);
    //             break;
    //         case 'divide':
    //             if (value2 !== 0) {
    //                 newResult = value1 / value2;
    //                 setResult(newResult);
    //             } else {
    //                 setResult('Error: Division by zero');
    //             }
    //             break;
    //     }
    // };
    const handleCalculate = (operation) => {
        const value1 = parseFloat(num1) || 0;
        const value2 = parseFloat(num2) || 0;
        let newResult;


        switch(operation) {
            case 'add':
                setResult(value1 + value2);
                break;
            case 'subtract':
                setResult(value1 - value2);
                break;
            case 'multiply':
                setResult(value1 * value2);
                break;
            case 'divide':
                if(value2 !== 0){
                    setResult(value1 / value2);
                    break;
                }else{
                    setResult('Error: Division by zero');
                    break;
                }   
        }
    }

    

    return (
        <div className="p-4 bg-white border border-gray-400">
            <h2 className="text-2xl text-gray-700 mb-4 border-b pb-2 border-blue-500 text-center">
                Calculator Feature
            </h2>

            {/* Input Fields */}
            <div className="space-y-3 mb-4">
                <div>
                    <label htmlFor="num1" className="block text-sm text-gray-600 mb-1">
                        First Number
                    </label>
                    <input
                        id="num1"
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        // value={num1}
                        // onChange={(i) => setNum1(i.target.value)}
                        placeholder="Enter a number"
                        className="w-full p-2 border border-gray-300 text-lg"
                    />
                </div>
                <div>
                    <label htmlFor="num2" className="block text-sm text-gray-600 mb-1">
                        Second Number
                    </label>
                    <input
                        id="num2"
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Enter a number"
                        className="w-full p-2 border border-gray-300 text-lg"
                    />
                </div>
            </div>

            {/* Operation Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-4">
                {/* Button for Addition (+) */}
                <button
                    // onClick={() => handleCalculate('add')}
                    onClick={() => handleCalculate('add')}
                    className="p-3 text-white text-xl bg-blue-500"
                >
                    +
                </button>
                {/* Button for Subtraction (-) */}
                <button
                    onClick={() => handleCalculate('subtract')}
                    className="p-3 text-white text-xl bg-blue-500"
                >
                    -
                </button>
                {/* Button for Multiplication (x) */}
                <button
                    onClick={() => handleCalculate('multiply')}
                    className="p-3 text-white text-xl bg-blue-500"
                >
                    ×
                </button>
                {/* Button for Division (÷) */}
                <button
                    onClick={() => handleCalculate('divide')}
                    className="p-3 text-white text-xl bg-blue-500"
                >
                    ÷
                </button>
            </div>

            {/* Result Display */}
            <div className="p-3 bg-yellow-100 text-center border border-yellow-300">
                <p className="text-lg text-gray-700 mb-1">Result:</p>
                <p className="text-4xl text-blue-700 break-words">
                    {/* {result !== null ? result : '...'} */}
                    {result !== null ? result : '---'}
                </p>
            </div>
        </div>
    );
};

export default Calculator;