export const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const Validation = (formData) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    confirmpassword: '',
  };

  if (formData.name === '') {
    errors.name = 'Name is required';

  }

  if (formData.email === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (formData.password === undefined || formData.password === '') {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (formData.firstname === '') {
    errors.firstname = 'First Name is required';
  }

  if (formData.lastname === '') {
    errors.lastname = 'Last Name is required';
  }
  

  return errors;
};
