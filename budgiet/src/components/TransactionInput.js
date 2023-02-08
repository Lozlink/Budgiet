import { useState } from "react";
import axios  from "axios";
import { connect } from 'react-redux'
import {
  setTransactionDescription,
  setTransactionAmount,
  setTransactionType,
  setTransactionCategory
} from './actions/transactions';

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
    <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="description">Description: </label>
        <input 
        type="text"
        id="description"
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Add a description for your Income or Expense'
        />
      </div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input 
        type="text"
        id='amount'
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
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
      <div style={{display: transactionType === 'expense' ? 'block' : 'none'}}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
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
        <div>
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
  )
  
}



export default TransactionInput

