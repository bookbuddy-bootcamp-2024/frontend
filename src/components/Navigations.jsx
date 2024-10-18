import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigations({token, setToken}) {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  }
  return (
    <nav>
        <Link to="/">See All Books</Link>
        {token? (
          <>
          <Link to="/me">Account</Link> 
          <button onClick={handleLogout}>Logout</button>
          </>): (
          <Link to="/login">Login</Link>
        )}
    </nav>
    
  );
}

export default Navigations;