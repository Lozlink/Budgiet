import { useState, useEffect} from 'react'
import axios from 'axios'

const TransactionHistory = ({ loggedInUser} ) => {
  const [transaction, setTransanction] = useState('')

  const fetchTransactions  = async (loggedInUser) => {
    const res = await axios.get(`/api/transactions/${loggedInUser.id}`, {
      params: {
        user_id: loggedInUser.id
      }
    })
    const transactions = res.data
    console.log(Object.values(transactions)[3][0])
    
  }
  useEffect(() => {
    if (loggedInUser) {
      fetchTransactions(loggedInUser)
    }
  }, [loggedInUser])
  
}


export default TransactionHistory