import React from 'react'
import {Link} from 'react-router-dom';

function BookCard({book}) {
  return (
    <div >
        <Link to={`/books/${book.id}`}>
        <h3>{book.title}</h3>
        <img src={book.coverimage} alt={book.title}/>
        </Link>
    </div>
  );
}

export default BookCard;