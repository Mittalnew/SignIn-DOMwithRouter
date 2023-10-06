// src/Form.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

    const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors =  { name: '', email: '', password: '' };

    if (formData.name === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    } 

    if (formData.email === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } 

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } 

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitted(true); // Set a flag to show success message
    }
  };

   useEffect(() => {
    if (isSubmitted) {
      // Redirect to the welcome page
      navigate('/welcome');
    }
  }, [isSubmitted, navigate]);


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-300">
<div className="bg-blue-200 shadow-md rounded-md p-6 w-96 animate-fade-in">
        <h1 className="text-xl font-bold mb-4 text-blue-500">HELLO USER</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          </div>

          <div className="mb-4">
           <p className="text-sm text-gray-700">New to here ?
            <a href="/signup" className="text-blue-500 hover:underline">Sign up now</a>.</p>
        </div>

          <div className="mb-4">
            <button
              type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;