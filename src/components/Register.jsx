import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Register({token, setToken}) {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const handleInputChange = (e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value});
  }
  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const data = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/users/register`, newUser);
    console.log(data);
    if(data.data.token){
      localStorage.setItem("token", data.data.token);
      setToken(data.data.token);
      navigate("/me");
    }
  } catch (err) {
    console.log(err);
  }
};
  
  console.log(newUser);
  return (
    <div className='register-container'>
      <h2>Register Here</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label>
          <p>First Name (Optional)</p>
          <input type='text' name='firstname' onChange={handleInputChange}/>
        </label>
        <label>
          <p>Last Name (Optional)</p>
          <input type='text' name='lastname' onChange={handleInputChange}/>
        </label>
        <label>
          <p>Email</p>
          <input type='email' name='email' onChange={handleInputChange}/>
        </label>
        <label>
          <p>Password</p>
          <input type='password' name='password' onChange={handleInputChange}/>
        </label>
        <button>Register Now!</button>
      </form>
    </div>

  );
}

export default Register