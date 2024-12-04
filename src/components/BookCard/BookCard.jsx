import React from 'react'
import {Link} from 'react-router-dom';

function BookCard({book}) {
  return (
    <>
        <Link to={`/book/${book.id}`} className="book-card anchor-base-style" >
        <h2>{book.title}</h2>
        <img src={book.coverimage} alt={book.title}/>
        </Link>
    </>
  );
}

export default BookCard;