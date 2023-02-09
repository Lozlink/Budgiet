import { useState } from "react";
import axios  from "axios";
import './transaction.scss'
import { connect } from 'react-redux'
import {
  setTransactionDescription,
  setTransactionAmount,
  setTransactionType,
  setTransactionCategory
} from '../actions/transactions';

const TransactionInput = ({loggedInUser}) => {
    const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionTypeValue] = useState('deposit');
  const [category, setCategory] = useState('');
  const [otherCategory, setOtherCategory] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        description,
        amount,
        type: transactionType,
        category,
      }
      if (loggedInUser) {
        data.user_id = loggedInUser.id
      }
      const response = await axios.post('/api/transactions', data)
        
      console.log(response.data)
    } catch (error) {
      console.error(error.response.data)
    }

    setDescription('')
    setAmount(0)
    setTransactionTypeValue('deposit')
    setCategory('')
  }
  
  return (
    <div className="transaction-form-container">
      <h2 className="form-header">Add a Transaction</h2>
      <form onSubmit={handleSubmit} className='transaction-form'>
        <div className="form-input-container">
          <label htmlFor="description">Description: </label>
          <input 
          type="text"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Add a description for your Income or Expense'
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="amount">Amount: </label>
          <input 
          type="text"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="transactionType">Transaction Type:</label>
          <select
            id="transactionType"
            value={transactionType}
            onChange={(e) => setTransactionTypeValue(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-input-container"
        style={{display: transactionType === 'expense' ? 'block' : 'none'}}>
          <label htmlFor="category">Category:</label>
          <select
            value={category}
            onChange={(e) => {
            setCategory(e.target.value)
            setOtherCategory(e.target.value === 'other')
          }}   
          >
            <option value="groceries">Groceries</option>
            <option value="entertainment">Entertainment</option>
            <option value="transportation">Transportation</option>
            <option value='household'>Household Expenses</option>
            <option value='other'>Other</option>
          </select>
        </div>
      {category === 'other' && (
        <div className="form-input-container">
          <label htmlFor="otherCategory">Other Category:</label>
          <input
            type="text"
            id="otherCategory"
            onChange={(e) => setOtherCategory(e.target.value)}
            placeholder="Enter a category"
          />
          </div>
      )}
      <button type="submit">Add Transaction</button>
    </form>
  </div>
  )
  
}



export default TransactionInput

