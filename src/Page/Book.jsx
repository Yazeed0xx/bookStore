import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Book() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [read, setRead] = useState([]);

  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    getBooks();
    getFavorites();
    getRead();
  }, []);

  const getBooks = () => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0mQG7g0LQVJGDG2E7AHzhbD7261NltC3')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.results.books);
        setFilteredBooks(response.data.results.books); 
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  const getFavorites = () => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('userFavorites')) || [];
    setFavorites(favoritesFromStorage);
  };

  const getRead = () => {
    const readFromStorage = JSON.parse(localStorage.getItem('userRead')) || [];
    setRead(readFromStorage);
  };

  const addToFavorites = (book) => {
    if (!favorites.find((b) => b.rank === book.rank)) {
      const updatedFavorites = [...favorites, book]; 
      setFavorites(updatedFavorites);
      localStorage.setItem('userFavorites', JSON.stringify(updatedFavorites));
    }
  };

  const addToRead = (book) => {
    if (!read.find((b) => b.rank === book.rank)) { 
      const updatedRead = [...read, book]; 
      setRead(updatedRead);
      localStorage.setItem('userRead', JSON.stringify(updatedRead));
    }
  };

  const handleSearchClick = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearchClick} />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.rank} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={book.book_image} alt={book.title} className="h-64 w-full object-cover rounded-t-lg" />
                <div className="p-3 w-full h-full">
                  <h2 className="text-lg font-bold mb-2 text-gray-900">{book.title}</h2>
                  {/* <p className="text-sm text-gray-800">{book.description}</p> */}
                  <div className="mt-4 flex flex-wrap  justify-between items-center">
                    <div>
                      {!favorites.find((b) => b.rank === book.rank) ? (
                        <button onClick={() => addToFavorites(book)} className="btn btn-info mr-2 text-sm">
                          Add to Favorites
                        </button>
                      ) : (
                        <span className="text-green-500">Added to Favorites</span>
                      )}
                      {!read.find((b) => b.rank === book.rank) ? (
                        <button onClick={() => addToRead(book)} className="btn  mr-2 text-sm">
                          Add to Read
                        </button>
                      ) : (
                        <span className="text-green-500">Added to Read</span>
                      )}
                    </div>
                   
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-800"></p>
          )}

        </div>
      </div>
    </>
  );
}

export default Book;
