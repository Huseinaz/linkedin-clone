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
      <h1>Make the most of your professional life</h1>
      <form onSubmit={handleSubmit}>

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password (6+ characters)</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <p className='agreement'>By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement, Privacy Policy</span>, and <span>Cookie Policy</span>.</p>

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
          Agree & Join
        </button>
      </form>
      
      <p className='join'>Already on LinkedIn?{" "}
              <span>
                Sign in
              </span>
            </p>

    </div>
  )
}

export default Authentication