import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = ({ loggedInUser }) => {
  const [balance, setBalance] = useState(0);
  
  const fetchTransactions = async (loggedInUser) => {
    const response = await axios.get(`/api/transactions/${loggedInUser.id}`, {
    params: {
      user_id: loggedInUser.id
    }
  });
    const transactions = response.data;
    console.log(transactions)
    let total = 0;
    Object.values(transactions)[3].forEach(transaction => {
      if (transaction.type === 'deposit') {
        total += transaction.amount;
      } else {
        total -= transaction.amount;
      }
    });
    setBalance(total);
  };

  useEffect(() => {
    if (loggedInUser) {
      fetchTransactions(loggedInUser);
    }
  }, [loggedInUser]);

  return (
    <div className="balance">
      {loggedInUser ? <p>Your balance is: ${balance}</p> : <p>Please log in to see your balance</p>}
    </div>
  );
}

export default Balance