import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={renderLogIn}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

