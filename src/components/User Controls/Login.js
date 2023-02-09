import React, { useState } from 'react';
import './user.scss'

const Login = ({ renderLogIn }) => {
 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/api/sessions", {
  //       email,
  //       password
  //     });
  //     const user_id = response.data.id
  //     console.log(user_id)
  //     setUser(response.data)
  //     localStorage.setItem('user', response.data)
      
  //   } catch (error) {
  //     console.error(error.response.data);
  //   }
  // };

  return (
    <form onSubmit={renderLogIn} className='login-form'>
      <h2 className="login-header">Login</h2>
      <div className='login-container'>
        <div className="username">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className='password'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
      <button type="submit">Login</button>
    </div>
    </form>
  );
};

export default Login;

