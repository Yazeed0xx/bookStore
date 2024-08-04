import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Fot from './Fot';
import Nav from './Nav';

function Login() {
  const [FName, setFName] = useState('');
  const [Pass, setPass] = useState('');
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  

//   let getIfon = ()=>{
//     localStorage.getItem('name');
//     localStorage.getItem('email');
//     localStorage.getItem('pass');
//     setFName()

//   }



  
  

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!FName) {
      tempErrors['FName'] = 'Username is required';
      isValid = false;
    }

    if (!Pass) {
      tempErrors['Pass'] = 'Password is required';
      isValid = false;
    } else {
    //   if (!user) {
    //     tempErrors['Credentials'] = 'Username or password is incorrect';
    //     isValid = false;
    //   }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedName = JSON.parse(localStorage.getItem('name'));
      const storedPass = JSON.parse(localStorage.getItem('pass'));

      if (FName === storedName && Pass === storedPass) {
        navigate('/home');
      } else {
        setErrors({ Credentials: 'Username or password is incorrect' });
      }
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
            <h2 className="text-4xl font-bold text-center text-gray-700">Login</h2>
            <p className="text-center text-gray-600 mb-8">Welcome back. Please login to your account.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Usrname
                </label>
                <input
                  id="username"
                  type="text"
                  value={FName}
                  onChange={(e) => setFName(e.target.value)}
                  placeholder="Enter your email"
                  className={`mt-1 block w-full px-4 py-3 border ${errors.FName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.FName && <span className="text-red-500 text-sm">{errors.FName}</span>}
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
                Don't have an account?
                <Link to="/sign" className="text-blue-500 hover:underline">
                  Sign up here
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

export default Login;
