import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/book-logo.png'; 
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/slices/FilterSlice';
import SearchInput from './SearchInput';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const filter = useSelector((state) => state.productFilter.filter);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-sky-600 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 w-24 mr-4" />
        </Link>

        <div className="block md:hidden">
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

        <nav className="lg:flex lg:items-center lg:justify-center flex-grow max-md:hidden ">
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
          {/* <input
            onChange={(e) => dispatch(setFilter(e.target.value))}
            value={filter}
            placeholder="filter by name"
            className="px-3 py-2 border rounded-md bg-white text-blue-700 focus:outline-none  "
          /> */}
          <SearchInput/>
        </div>
        
        <div className="flex min-w-72 justify-end gap-4 left-9">
          <Link to='/login'><button className='btn'>Log in </button></Link>
          <Link to='/sign'><button className='btn'>Sign </button></Link>
        </div>
      </div>
      
      {menuOpen && (
        <div className="block md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
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
        
        </div>
      )}
    </div>
  );
}

export default Nav;
