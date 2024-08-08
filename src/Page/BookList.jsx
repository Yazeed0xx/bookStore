import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import NotFound from './NotFound';

function BookList() {
  const [books, setBooks] = useState([]);
  const filter = useSelector((state) => state.productFilter.filter.toLowerCase());

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0mQG7g0LQVJGDG2E7AHzhbD7261NltC3')
      .then((response) => {
        setBooks(response.data.results.books);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {filteredBooks.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredBooks.map((book) => (
            <div key={book.rank} className="bg-white shadow-lg rounded-lg overflow-hidden max-md:w-[250px]">
              <img src={book.book_image} alt={book.title} className="h-64 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
