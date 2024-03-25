import React, { useState } from 'react'
import axios from 'axios';
import logo from '../Assets/Linkedin-Logo.png';

import './style.css'

const Authentication = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here
    //  This might involve sending the email and password to your backend server
    //  for validation
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Your company logo" />
      </header>
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <p className='p-gray'>Stay updated on your professional world</p>
        
        <input type="email" value={email} placeholder='Email or Phone' onChange={(e) => setEmail(e.target.value)} />

        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

        <p className='p-blue'>Forgot password?</p>

        <button onClick={() => {
          axios.post('http://localhost/linkedin-clone/backend/login.php', {
            email: email,
            password: password
          })
        .then((res) => {
            console.log(res);
          })
        .catch((err) => {
            console.log(err);
          })
        }}>
          Sign in
        </button>
      </form>
      
      <p className='join'>New to LinkedIn?{" "}
              <span>
                Join now
              </span>
            </p>

    </div>
  )
}

export default Authentication