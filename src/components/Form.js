
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import { Validation } from './Validation';


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
  console.log('handleSubmit function called'); // Add this line for debugging

      const formErrors = Validation(formData);
      console.log('Form errors:', formErrors);

      setErrors(formErrors);
      
      if (Object.values(formErrors).every((error) => !error)) {
// console.log('Before setIsSubmitted(true)');

          setIsSubmitted(true);
          // console.log('After setIsSubmitted(true)');

        } else {
    console.log('Form has errors'); // Add this line for debugging
  }
    };

 useEffect(() => {
    if (isSubmitted) {
            // console.log('Navigating to /welcome'); // Debugging line

      navigate('/welcome');
    }
  }, [isSubmitted, navigate]);


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-300">
      <div className="bg-blue-200 shadow-md rounded-md p-6 w-96 animate-fade-in">
        <h1 className="text-xl font-bold mb-4 text-blue-500">HELLO USER</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            id="name"
            name="name"
            label="Name:"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <InputField
            id="email"
            name="email"
            label="Email:"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <InputField
            id="password"
            name="password"
            label="Password:"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              New to here ?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up now
              </a>
              .
            </p>
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
