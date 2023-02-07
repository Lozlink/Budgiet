import { useState } from "react";
import axios  from "axios";

const TransactionInput = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('deposit');
  const [category, setCategory] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('/api/transactions', {
        description,
        amount,
        type: transactionType,
        category
      }) 
      console.log(response.data)
    } catch (error) {
      console.error(error.response.data)
    }

    setDescription('')
    setAmount('')
    setTransactionType('deposit')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description: </label>
        <input 
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Add a description for your deposit/Withdrawal'
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
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="groceries">Groceries</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value='household'>Household Expenses</option>
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionInput

