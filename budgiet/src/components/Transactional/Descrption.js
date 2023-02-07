import { Connect } from "react-redux"
let Description = ({description, setTransactionDescription}) => {
  return (
  <div>
        <label htmlFor="description">Description: </label>
        <input 
        type="text"
        id="description"
        value={description || ""}
        onChange={(e) => setTransactionDescription(e.target.value)}
        placeholder='Add a description for your Income or Expense'
        />
      </div>
)}

export default Description