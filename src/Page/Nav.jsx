import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/book-logo.png'; 

function Nav({ searchTerm, setSearchTerm, onSearch }) {
  const [searchTermLocal, setSearchTermLocal] = useState(searchTerm);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTermLocal(term);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchTermLocal); 
    onSearch(); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" bg-sky-600 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 w-24 mr-4" />
        </Link>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="lg:flex lg:items-center lg:justify-center flex-grow">
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link to="/book" className="hover:text-gray-200">Books</Link>
            </li>
            <li>
              <Link to="/fav" className="hover:text-gray-200">Favorites</Link>
            </li>
            <li>
              <Link to="/read" className="hover:text-gray-200">Read</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTermLocal}
            onChange={handleSearchChange}
            className="px-3 py-2 border rounded-md bg-white text-blue-700 focus:outline-none hidden lg:block"
          />
          <button onClick={handleSearchClick} className="ml-2 bg-white text-blue-500 px-3 py-2 rounded-md hover:bg-blue-100 focus:outline-none hidden lg:block">
            Search
          </button>
        

        </div>
        <div className="flex min-w-72 justify-end gap-4 left-9">         
           <Link to='/login'><button className='btn'>Log in </button></Link>
           <Link to='/sign'><button className='btn'>Sign </button></Link>

      </div>
      </div>
      
    </div>
  );
}

export default Nav;
