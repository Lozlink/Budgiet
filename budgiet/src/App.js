import './App.scss';
import TransactionInput from './components/TransactionInput';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="Budgie">
        <div className="logo">
          <img src="https://i.imgur.com/DzKugbJ.png" alt="" />
        </div>
        <div className="header">
          <h1 className="Title">Budgiet</h1>
          <h2 className='slogan'>Don't get your money fly away</h2>
          <Routes>
            <Route path='/transaction' element={<TransactionInput />}/>
            {/* <Route path='/signup' element={<SignUp/>}/> */}
          </Routes>
          <div className="nav">
            <Link to='/signup'>Sign up!</Link>
            <Link to='/login'>Log in!</Link>
            <Link to='/transaction'>Transaction</Link>
          </div>
        </div>
   </div>
  );
}

export default App;
