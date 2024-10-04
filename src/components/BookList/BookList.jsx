import React from 'react'

function BookList({bookData}) {
  return (
    <div>
        {bookData.map((book) => (
        <div key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title}/>
        </div>
))}
    </div>
  );
}

export default BookList