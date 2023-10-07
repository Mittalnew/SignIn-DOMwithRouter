
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import { Validation } from './Validation';

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
    const formErrors = Validation(formData);
    setErrors(formErrors);

    if (Object.values(formErrors).every((error) => !error)) {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate('/Form');
    }
  }, [isSubmitted, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-300">
      <div className="bg-blue-200 shadow-md rounded-md p-6 w-96 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Sign Up Now</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            id="firstname"
            name="firstname"
            label="First Name:"
            value={formData.firstname}
            onChange={handleInputChange}
            error={errors.firstname}
          />
          <InputField
            id="lastname"
            name="lastname"
            label="Last Name:"
            value={formData.lastname}
            onChange={handleInputChange}
            error={errors.lastname}
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
          <InputField
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password:"
            type="password"
            value={formData.confirmpassword}
            onChange={handleInputChange}
            error={errors.confirmpassword}
          />
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
