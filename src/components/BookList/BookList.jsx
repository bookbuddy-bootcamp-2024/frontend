import React from 'react'
import BookCard from '../BookCard/BookCard';

function BookList({bookData}) {
  return (
    <div className='books-container'>
        {bookData.map((book) => (
        <BookCard key={book.id} book ={book}/>
))}
    </div>
  );
}

export default BookList;