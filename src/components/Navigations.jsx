import React from 'react'
import { Link } from 'react-router-dom'

function Navigations() {
  return (
    <nav>
        <Link to="/">See All Books</Link>
        <Link to="login">Login</Link>
    </nav>
    
  )
}

export default Navigations;