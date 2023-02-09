import { useState, useEffect} from 'react'
import axios from 'axios'
import './account.scss'
import { Link } from 'react-router-dom'

const TransactionHistory = ({ loggedInUser} ) => {
  const [transactions, setTransanctions] = useState('')
  const [filter, setFilter] = useState('all')
  const [filteredTransactions, setFilteredTransactions] = useState([])
  

  const fetchTransactions  = async (loggedInUser) => {
    const res = await axios.get(`/api/transactions/${loggedInUser.id}`, {
      params: {
        user_id: loggedInUser.id
      }
    })
    console.log(res.data)
    setTransanctions(res.data)
  }
   
  useEffect(() => {
    if (loggedInUser) {
      fetchTransactions(loggedInUser)
    }
  }, [loggedInUser])

  useEffect(() => {
    if (transactions) {
      if (filter === 'income') {
        setFilteredTransactions(transactions.filter(transaction => transaction.type === 'deposit'))
      } else if (filter === 'expense') {
        setFilteredTransactions(transactions.filter(transaction => transaction.type === 'expense'))
      } else {
        setFilteredTransactions(transactions)
      }
    }
  }, [filter, transactions])

  const renderTransactions = () => {
    return filteredTransactions.map((transaction, index) => {
      return (
        <tr className='transaction' key={index}>
          <td>{transaction.type.toUpperCase()}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.description.toUpperCase()}</td>
          <td>{transaction.category.toUpperCase()}</td>
        </tr>
      )
    })
  }
  
  return (
    <div>
        <div className="transaction-history">
          {loggedInUser ? (
              <><h2>Transaction History</h2>
              <div className="toggle-buttons">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('income')}>Income</button>
                <button onClick={() => setFilter('expense')}>Expense</button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Type:</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTransactions()}
                </tbody>
              </table>
              <Link to='/balance' className='link-balance'>Click here to see Balance</Link>
              </>
          ) : (
            <p>Please log in to view transaction history</p>
          )}
        </div>
    </div>
  );
}

export default TransactionHistory