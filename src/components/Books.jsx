import React, {useEffect, useState} from 'react'
import axios from "axios";

function Books() {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
        .then ((data) => {console.log(data.data.books);
            setBookData(data.data.books);
        })
        .catch((err) => console.log(err));
    }, []);

      return (
    <div>
        {bookData.map((book) => (
            <p key={book.id}>{book.title}</p>
        ))}
    </div>
  );
}

export default Books;