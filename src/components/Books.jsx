import React, { useEffect, useState } from "react";
import BookList from "./BookList/BookList";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [booksToDisplay, setBooksToDisplay] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then((data) => {
        console.log(data.data.books);
        setBooks(data.data.books);
        setBooksToDisplay(data.data.books)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBookSearch = (e)=>{
    const searchResults = books.filter((book)=>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
    setBooksToDisplay(searchResults);
  };
  return (
    <div>
      <div>Search for Book: <input type="text" onChange={handleBookSearch}/>
      </div>
      <BookList books={booksToDisplay}/>
    </div>
  );
}

export default Books;
