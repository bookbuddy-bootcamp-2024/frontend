import React from 'react'
import BookCard from '../BookCard/BookCard';

function BookList({books}) {
  return (
    <div className='books-container'>
        {books.map((book) => (
        <BookCard key={book.id} book ={book}/>
))}
    </div>
  );
}

export default BookList;