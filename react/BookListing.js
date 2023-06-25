// BookListing.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

const BookListing = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books data from an API or local storage
    // Update the 'books' state with the fetched data
  }, []);

  return (
    <div>
      <h2>Book Listing</h2>
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookListing;
