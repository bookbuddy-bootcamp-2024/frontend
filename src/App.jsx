import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png'
import Books from './components/Books';
import Login from './components/Login';
import Account from './components/Account';
import Register from './components/Register';
import Navigations from './components/Navigations';
import SingleBook from './components/SingleBook';
import "../styles/main.scss";

function App() {
  const [token, setToken] = useState(null);

  useEffect(()=>{
    const localToken = localStorage.getItem("token");
    if(localToken) {
      setToken(localToken);
    }
  }, [])
  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App
      </h1>
      
      <Navigations token={token} setToken={setToken}/>

     <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/me" element={<Account/>}/>
      <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
      <Route path="/register" element={<Register token={token} setToken={setToken}/>}/>
      <Route path="/books/:bookid" element={<SingleBook token={token}/>}/>
      <Route path="*" element={<Books/>}/>
     </Routes>
    </>
  )
}

export default App
