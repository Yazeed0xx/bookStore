// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Nav from './Nav';

// function Details() {
//   const { bookId } = useParams();
//   const [bookDetails, setBookDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchBookDetails();
//   }, [bookId]);

//   const fetchBookDetails = async () => {
//     try {
//       const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0mQG7g0LQVJGDG2E7AHzhbD7261NltC3`);
//       const book = response.data.results.books.find(book => book.rank === parseInt(bookId));
//       setBookDetails(book);
//       setLoading(false);
//     } catch (error) {
//       setError();
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <Nav/>
    
//     <div className="container mx-auto py-8">
//       {loading ? (
//         <p className="text-center"></p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : bookDetails ? (
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h1 className="text-3xl font-bold mb-4">{bookDetails.title}</h1>
//           <img src={bookDetails.book_image} alt={bookDetails.title} className="mb-4"/>
//           <p className="text-lg mb-4">{bookDetails.description}</p>
//           <p className="text-lg"><strong>Author:</strong> {bookDetails.author}</p>
//           <p className="text-lg"><strong>Publisher:</strong> {bookDetails.publisher}</p>
//           <p className="text-lg"><strong>Rank:</strong> {bookDetails.rank}</p>
//           {bookDetails.amazon_product_url && (
//             <p className="text-lg">
//               <strong>Amazon Link:</strong>{' '}
//               <a href={bookDetails.amazon_product_url} target="_blank" rel="noopener noreferrer">
//                 {bookDetails.amazon_product_url}
//               </a>
//             </p>
//           )}
//         </div>
//       ) : (
//         <p className="text-center"></p>
//       )}
//     </div>
//     </>
//   );
// }

// export default Details;
