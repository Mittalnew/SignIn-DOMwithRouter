
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
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
    const newErrors =  { firstname: '',lastname:'', email: '', password: '', confirmpassword:''};

    if (formData.firstname === '') {
      newErrors.firstname = 'First Name is required';
      isValid = false;
    } 

    if (formData.lastname === '') {
      newErrors.lastname = 'Last Name is required';
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

    if (formData.confirmpassword.length < 6) {
      newErrors.confirmpassword = 'Password must be at least 6 characters long';
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
      navigate('/Form');
    }
  }, [isSubmitted, navigate]);


   
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-300">
<div className="bg-blue-200 shadow-md rounded-md p-6 w-96 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Sign Up Now</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.firstname}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.lastname}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="text"
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Confirm Password:
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-sm mt-1">{errors.confirmpassword}</span>
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


export default SignUp;