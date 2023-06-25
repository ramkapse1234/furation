// BookItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookItem;
