import React, { useState } from 'react';
import axios from 'axios';
import './user.scss'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post("/api/users", {
          name,
          email,
          password,
        });
        console.log(response);
      } catch (error) {
        console.error(error.response.data);
      }
    };
  

  return (
    <><form onSubmit={handleSubmit} className='signup-form'>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div>
      <h4>Already have an account? Log in <Link to="/login">Here</Link></h4>

      </div></>
  );
};

export default SignUp;