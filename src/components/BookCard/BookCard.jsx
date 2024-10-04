import React from 'react'

function BookCard({book}) {
  return (
    <div >
        <h3>{book.title}</h3>
        <img src={book.coverimage} alt={book.title}/>
    </div>
  );
}

export default BookCard;