import React from 'react'

function Register() {
  return (
    <div>
      <h2>Register Here</h2>
      <form>
        <label>
          <p>First Name (Optional)</p>
          <input type='text'/>
        </label>
        <label>
          <p>Last Name (Optional)</p>
          <input type='text'/>
        </label>
        <label>
          <p>Email</p>
          <input type='email'/>
        </label>
        <label>
          <p>Password</p>
          <input type='password'/>
        </label>
        <button> Register Now!</button>
      </form>
    </div>

  );
}

export default Register