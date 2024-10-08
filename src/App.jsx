import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png'
import Books from './components/Books';
import Login from './components/Login';
import Account from './components/Account';
import Register from './components/Register';
import Navigations from './components/Navigations';

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <Navigations/>

     <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/me" element={<Account/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<Books/>}/>
     </Routes>
    </>
  )
}

export default App
