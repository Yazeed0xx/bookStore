import React, { useState } from 'react';
import axios from 'axios';
import Fot from './Fot';
import Nav from './Nav';
import { useNavigate, Link } from 'react-router-dom';



function Sign() {
  const [FName, setFname] = useState('');
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
const SendInfo =()=>{
  localStorage.setItem("name", JSON.stringify(FName));
  localStorage.setItem("email", JSON.stringify(Email));
  localStorage.setItem("pass", JSON.stringify(Pass));
}




  const validate = () => {
    let isValid = true;
    let tempErrors = {};

    if (!FName) {
      tempErrors['FName'] = 'Username is required';
      isValid = false;
    } 

    if (!Email) {
      tempErrors['Email'] = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      tempErrors['Email'] = 'Email is invalid';
      isValid = false;
    }

    if (!Pass) {
      tempErrors['Pass'] = 'Password is required';
      isValid = false;
    } else if (Pass.length < 6) {
      tempErrors['Pass'] = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        SendInfo()
        navigate('/login')
    }
  };

  return (
    <>
      <Nav />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 bg-blue-500 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/564x/4b/d9/24/4bd92412f4e5d8713d719c6957d10898.jpg"
              alt="Login illustration"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 p-12">
            <h2 className="text-4xl font-bold text-center text-gray-700">Sign in</h2>
            <p className="text-center text-gray-600 mb-8"> Crear  your account.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={FName}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter your Username"
                  className={`mt-1 block w-full px-4 py-3 border ${errors.FName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.FName && <span className="text-red-500 text-sm">{errors.FName}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="Email"
                  type="text"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`mt-1 block w-full px-4 py-3 border ${errors.Email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
              </div>
              <div className="form-control">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={Pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Enter your password"
                  className={`mt-1 block w-full px-4 py-3 border ${errors.Pass ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.Pass && <span className="text-red-500 text-sm">{errors.Pass}</span>}
                {errors.Credentials && <span className="text-red-500 text-sm">{errors.Credentials}</span>}
              </div>
              <div className="flex items-center justify-between">
               
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Login
                </button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                already have an account
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Fot />
    </>
  );
}

export default Sign;
