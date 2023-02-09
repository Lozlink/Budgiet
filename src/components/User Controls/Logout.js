import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Logout = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
    navigate('/')
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
    <div className='logout'>
      {loggedInUser ? ( <p> Are you sure you want to Log out, {loggedInUser.name}?</p>) : null}
       {loggedInUser && (
         <button onClick={handleLogout}>Logout</button>
       )}
       {!loggedInUser && (
        <p>You're not logged in, How did you even get here?</p>
       )}
      
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default Logout;