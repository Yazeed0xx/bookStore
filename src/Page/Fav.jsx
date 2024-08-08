import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './Nav';

function Fav() {
  const [userFavorites, setUserFavorites] = useState([]);
  const filter = useSelector((state) => state.productFilter.filter.toLowerCase());

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('userFavorites')) || [];
    setUserFavorites(favoritesFromStorage);
  }, []);

  const removeFromFavorites = (book) => {
    const updatedFavorites = userFavorites.filter((favBook) => favBook.rank !== book.rank);
    setUserFavorites(updatedFavorites);
    localStorage.setItem('userFavorites', JSON.stringify(updatedFavorites));
  };

  const filteredFavorites = userFavorites.filter((book) =>
    book.title.toLowerCase().includes(filter)
  );

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
        {filteredFavorites.length === 0 ? (
          <p className="text-center">You haven't added any favorites yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredFavorites.map((book) => (
              <div key={book.rank} className="bg-white shadow-lg rounded-lg overflow-hidden max-md:w-[250px]">
                <img src={book.book_image} alt={book.title} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => removeFromFavorites(book)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                    >
                      Remove from Favorites
                    </button>
                    <Link
                      to={`/det/${book.rank}`}
                      className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Fav;
