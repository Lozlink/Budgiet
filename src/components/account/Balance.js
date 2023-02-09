import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './account.scss'
import { Link } from 'react-router-dom'

const Balance = ({ loggedInUser }) => {
  const [balance, setBalance] = useState(0);
  
  const fetchTransactionBalance = async (loggedInUser) => {
    const response = await axios.get(`/api/transactions/${loggedInUser.id}`, {
    params: {
      user_id: loggedInUser.id
    }
  });
    const transactions = response.data;
    console.log(transactions)
    let total = 0;
    Object.values(transactions).forEach(transaction => {
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
      fetchTransactionBalance(loggedInUser);
    }
  }, [loggedInUser]);

  return (
    <><div className="balance-box">
      <h2>Balance</h2>
      <div className="balance-content">
        {loggedInUser ? <p>${balance}</p> : <p>Please log in to see your balance</p>}
      </div>
    </div><div className="redirect">
        <Link to='/transactionhistory'>Click here to view Transaction History</Link>
      </div></>
  );
}

export default Balance