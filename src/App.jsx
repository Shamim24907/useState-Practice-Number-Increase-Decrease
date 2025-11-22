import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(5);

  const increaseNum = () => setNum((prev) => prev + 1);
  const decreaseNum = () => setNum((prev) => prev - 1);
  const resetNum = () => setNum(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-100 to-blue-300 p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[320px] flex flex-col items-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Counter App</h2>

        {/* Number Box */}
        <div className="bg-blue-200 shadow-inner rounded-xl px-10 py-6 mb-8 flex justify-center items-center">
          <span className="text-7xl font-extrabold text-blue-800">{num}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full">

          <button
            onClick={increaseNum}
            className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Increase
          </button>

          <button
            onClick={decreaseNum}
            className="bg-linear-to-r from-red-500 to-red-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Decrease
          </button>

          <button
            onClick={resetNum}
            className="bg-gray-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
};

export default App;
