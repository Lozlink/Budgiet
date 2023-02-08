import './App.scss';
import TransactionInput from './components/Transactional/TransactionInput';
import Header from './components/Header/Header';
import Login from './components/User Controls/Login';
import SignUp from './components/User Controls/SignUp';
import Balance from './components/account/Balance';
import { Routes, Route, Link } from 'react-router-dom'
import Logout from './components/User Controls/Logout';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import TransactionHistory from './components/account/transactionHistory';


const App = () =>  {
  const navigate = useNavigate()
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const  [user, setUser] = useState()
  // const [error, setError] = useState()

  // const renderLogIn = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const response = await axios.post("/api/sessions", {
  //         email: email
  //         password: password
  //       });
  //       console.log(response.data)
  //       setUser(response.data)
  //       localStorage.setItem('user', response.data)
        
  //     } catch (error) {
  //       console.error(error.response.data);
  //     }
  //   };

  const [loggedInUser, setLoggedInUser] = useState(null)

  const renderLogIn = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          document.querySelector('.error-message').textContent = 'Please enter a password or email.'
        } else {
          setLoggedInUser(res)
          console.log(res)
          navigate('/transaction')
        
        }
      })
  }
  return (
    <div className="Budgie">
        <Header loggedInUser={loggedInUser}/>
          <Routes>
            <Route path='/transaction' element={<TransactionInput loggedInUser={loggedInUser}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login renderLogIn={renderLogIn}/>}/>
            <Route path='/logout' element={<Logout loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>
            <Route path='/balance' element={<Balance loggedInUser={loggedInUser}/>}/>
            <Route path='/transactionhistory' element={<TransactionHistory loggedInUser={loggedInUser}/>}/>
          </Routes>
        
   </div>
  );
}

export default App;
