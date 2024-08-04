import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav'; 
import { Link } from 'react-router-dom';

function Read() {
  const [finishedBooks, setFinishedBooks] = useState([]);

  useEffect(() => {
    getFinishedBooks();
  }, []);

  const getFinishedBooks = () => {
    const finishedBooksFromStorage = JSON.parse(localStorage.getItem('userRead')) || [];
    setFinishedBooks(finishedBooksFromStorage);
  };

  const removeFromFinished = (book) => {
    const updatedFinishedBooks = finishedBooks.filter((b) => b.rank !== book.rank);
    setFinishedBooks(updatedFinishedBooks);
    localStorage.setItem('userRead', JSON.stringify(updatedFinishedBooks));
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-6">Finished Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {finishedBooks.length > 0 ? (
            finishedBooks.map((book) => (
              <div key={book.rank} className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
                {book.book_image && (
                  <img src={book.book_image} alt={book.title} className="h-64 w-full object-cover" />
                )}
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">{book.title}</h2>
                  <div className="card-actions mt-4">
                    <Link to={`/det/${book.rank}`} className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">View Details</Link>
                    <button onClick={() => removeFromFinished(book)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">Unmark as Finished</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No finished books yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Read;
