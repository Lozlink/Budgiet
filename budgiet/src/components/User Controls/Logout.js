import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [error, setError] = useState();

  const handleLogout = async () => {
    try {
      await axios.delete("/api/sessions");
      localStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  if (!user) {
    return <div>Not logged in</div>;
  }
  return (
    <div>
      <p>{user.name} is logged in</p>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Logout;