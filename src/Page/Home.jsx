import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Fot from './Fot';

function Home() {
  const [newReleases, setReleases] = useState([]);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    fetchNewReleases();
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % newReleases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newReleases.length]);

  const fetchNewReleases = async () => {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0mQG7g0LQVJGDG2E7AHzhbD7261NltC3');
      setReleases(response.data.results.books.slice(0, 8));
    } catch (error) {
      console.error('Error fetching new releases:', error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container  mx-auto  py-8 px-4">
        <div className="bg-slate-100 rounded-lg p-8 mb-8 md:flex md:space-x-8 md:items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Digital Library</h1>
            <p className="text-lg text-gray-700">
              
            </p>
            <p className='text-lg font-bold  text-gray-700'>We have the biggest library book in the world, we have more then 10,000+ book in our library</p>
          </div>
        </div>

        <div className="flex justify-end mb-4 md:hide">
          <Link to="/book" className="text-blue-500">
            See all new releases
          </Link>
        </div>

        <div className="md:flex p-2 md:space-x-6 md:items-start">
          <div className="md:w-1/3 hidden md:block">
            <div className="mb-8 overflow-hidden">
              <div className="carousel" data-autoplay="true" data-delay="5000">
                {newReleases.map((book, index) => (
                  <div
                    key={book.rank}
                    className={`carousel-item flex  bg-red-600 ${index === Index ? 'active' : 'hidden'}`}
                  >
                    <img
                      src={book.book_image}
                      alt={book.title}
                      className="w-full object-cover rounded-lg"
                      style={{ height: '600px' }} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newReleases.map((book) => (
              <div key={book.rank} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={book.book_image} alt={book.title} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-700">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4 md:flex hidden">
          <Link to="/book" className="text-blue-500">
            See all new releases
          </Link>
        </div>
      </div>
      <Fot />
    </>
  );
}

export default Home;
