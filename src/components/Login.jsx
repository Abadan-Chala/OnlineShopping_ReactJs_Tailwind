import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Email is not valid';
    
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMessage('Login successful!');
    setErrors({});
    setEmail('');
    setPassword('');

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    } else if (!validateEmail(email)) {
      setErrors({ email: 'Email is not valid' });
      return;
    }

    setResetMessage('We will send you an email for password reset.');
    setErrors({}); 
    setEmail('');

    setTimeout(() => {
      navigate('/'); 
    }, 2000);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white rounded-lg shadow-md p-6 hover:transform transition duration-300 hover:scale-105'>
        <h2 className='text-2xl font-bold mb-4 text-center text-green-900 hover:text-green-600 transform transition duration-300 hover:scale-105'>Login</h2>
        {!forgotPassword ? (
          <form onSubmit={handleLoginSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type="email"
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Password</label>
              <input
                type="password"
                className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>
            <button
              type='submit'
              className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 w-full transform transition duration-300 hover:scale-105'
            >
              Login
            </button>
            <p className='mt-4 text-center text-gray-600'>
              <a href="#" className='text-blue-500 hover:underline' onClick={() => setForgotPassword(true)}>Forgot Password?</a>
            </p>
            <p className='mt-4 text-center text-gray-600'>
              Don't have an account?{' '}
              <a href="#" className='text-blue-500 hover:underline' onClick={() => navigate('/signup')}>Sign Up</a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type="email"
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <button
              type='submit'
              className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 w-full transform transition duration-300 hover:scale-105'
            >
              Send Reset Email
            </button>
            <p className='mt-4 text-center text-gray-600'>
              <a href="#" className='text-blue-500 hover:underline' onClick={() => setForgotPassword(false)}>Back to Login</a>
            </p>
          </form>
        )}
        {successMessage && <p className='text-green-500 text-center mt-4'>{successMessage}</p>}
        {resetMessage && <p className='text-green-500 text-center mt-4'>{resetMessage}</p>}
      </div>
    </div>
  );
}

export default Login;