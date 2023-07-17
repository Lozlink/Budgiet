import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './account.scss'
import { Link } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Balance = ({ loggedInUser }) => {
  const [balance, setBalance] = useState(0);
  const [graphValue, setGraphValue] = useState([])

  
  const fetchTransactionBalance = async (loggedInUser) => {
    const response = await axios.get(`/api/transactions/${loggedInUser.id}`, {
    params: {
      user_id: loggedInUser.id
    }
  });
    const transactions = response.data;
    let total = 0;
    Object.values(transactions).forEach(transaction => {
      if (transaction.type === 'deposit') {
        total += transaction.amount;
        graphValue.push(transaction.amount)
      } else {
        total -= transaction.amount;
        graphValue.push(transaction.amount * -1)
      }
      
    });
    setBalance(total);
    setGraphValue(graphValue)
  };

  console.log(graphValue)
  

  useEffect(() => {
    if (loggedInUser) {
      fetchTransactionBalance(loggedInUser);
    }
  }, [loggedInUser ]);

  return (
    <>
    <div className="balance-box">
      <h2>Balance</h2>
      <div className="balance-content">
        {loggedInUser ? <p>${balance}</p> : <p>Please log in to see your balance</p>}
      </div>
    </div>
    <div className="chart-container">
    <Line
      data={{
        labels: graphValue.map((_, index) => index + 1),
        datasets: [
          {
            label: 'Cash Flow',
            data: graphValue,
            showLine: true,
            tension: 0.1,
            borderColor: 'rgb(75, 192, 192)',
            
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Display of Cash Flow.',
          },
          legend: {
            display: false,
          },
          
        },
        maintainAspectRatio: true,
        responsive: true
      }}
    />
    </div>
    
    <div className="redirect">
      <Link to='/transactionhistory'>Click here to view Transaction History</Link>
    </div></>
  );
}

export default Balance