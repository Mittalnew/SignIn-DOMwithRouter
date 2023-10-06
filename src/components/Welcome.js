import React from 'react';

function Welcome() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for visiting our website.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            // Handle button click action, e.g., navigate to another page
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
