import { useState } from "react";

const TransactionInput = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('deposit');

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add in code to post into database here

    setDescription('')
    setAmount('')
    setTransactionType('deposit')
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
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionInput
