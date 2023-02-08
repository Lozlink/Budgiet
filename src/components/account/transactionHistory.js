import { useState, useEffect} from 'react'
import axios from 'axios'
import './account.scss'

const TransactionHistory = ({ loggedInUser} ) => {
  const [transactions, setTransanctions] = useState('')

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
  }, [])

  const renderTransactions = () => {
    return transactions && transactions
    .map((transaction, index) => {
      return (
        <tr className='transaction' key={index}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
        </tr>
      )
    })
  }

  
  return (
    <div>
        <div className="transaction-history">
          {loggedInUser ? (
              <><h2>Transaction History</h2><table>
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
          </table></>
          ) : (
            <p>Please log in to view transaction history</p>
          )}
        </div>
    </div>
  );
}

export default TransactionHistory