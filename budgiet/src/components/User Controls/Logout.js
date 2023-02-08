import React, { useState } from 'react';
import axios from 'axios';

const Logout = ({ loggedInUser, setLoggedInUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

// const Logout = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null)
//   const [error, setError] = useState();

//   const handleLogout = async () => {
//     try {
//       await axios.delete("/api/sessions");
//       localStorage.removeItem('user');
//       setLoggedInUser(null);
//     } catch (error) {
//       setError(error.response.data);
//     }
//   };

  // if (!loggedInUser) {
  //   return <div>Not logged in</div>;
  // }
  return (
    <div>
      {loggedInUser ? ( <p> Are you sure you want to Log out, {loggedInUser.name}?</p>) : null}
      <button onClick={handleLogout}>Logout</button>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default Logout;