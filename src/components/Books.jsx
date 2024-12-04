import React, { useEffect, useState } from "react";
import BookList from "./BookList/BookList";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then((data) => {
        setBooks(data.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookList books={books}/>
    </div>
  );
}

export default Books;
