import React from 'react'
import {Link} from 'react-router-dom';

function BookCard({book}) {
  return (
    <>
        <Link to={`/books/${book.id}`} className="book-card anchor-base-style" >
        <h3>{book.title}</h3>
        <img src={book.coverimage} alt={book.title}/>
        </Link>
    </>
  );
}

export default BookCard;