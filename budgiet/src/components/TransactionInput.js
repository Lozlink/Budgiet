import { useState } from "react";

const TransactionInput = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add in code to add to database here 

    setDescription('')
    setAmount('')
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
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionInput
