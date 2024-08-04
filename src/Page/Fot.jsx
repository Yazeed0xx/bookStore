import React from 'react';
import Logo from '../assets/book-logo.png'; // Replace with your actual logo file path

function Fot() {
  return (
    <footer className="bg-sky-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-24 mr-4" /> {/* Adjust height and width as needed */}
            </div>
          </div>
          <div className="w-full md:w-auto">
            {/* <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-200">About</a></li>
              <li><a href="#" className="hover:text-gray-200">Services</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fot;
