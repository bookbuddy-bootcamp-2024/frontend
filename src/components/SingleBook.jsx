import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SingleBook({token}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState(null);

    useEffect(()=>{
        axios(`${import.meta.env.VITE_API_BASE_URL}/api/books/${id}`)
        .then((data)=> {
            console.log(data.data);
            setBook(data.data.book);
        })
        .catch((err)=> console.log(err));
    }, []);

  return (
    <div className='single-book-container'>
        <h2>{book?.title}</h2>
        <p>{book?.author}</p>
        <img src={book?.coverimage} alt={'Cover image for ${book?.title} by ${book?.author}'}/>
        <p>{book?.description}</p>
        {token && book?.available && <button>Checkout Book</button>}
        {token && !book?.available && <p>Book Already Checked Out</p>}
        {!token && <button onClick={()=> navigate("/login")}>Login</button>}
    </div>
  )
}

export default SingleBook