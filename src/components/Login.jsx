import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const[loginData, setLoginData] = useState({});

  const handleUserInput = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };

  const handleLoginSubmit = async (e)=> {
    e.preventDefault();
    try{
      const data = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        loginData
      );
      console.log(data);
      if(data.data.token) {
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token);
        navigate("/me");
      }

    }catch(err){
      console.log(err)
    }
  };

  console.log(loginData);
  return (
    <div className='register-container'>
      <h2>Login</h2>
      <form className='register-form' onSubmit={handleLoginSubmit}>
        <label>
          <p>Email</p>
          <input type='email' name='email' onChange={handleUserInput}/>
        </label>
        <label>
          <p>Password</p>
          <input type='password' name='password' onChange={handleUserInput}/>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login