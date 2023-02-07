import './App.scss';
import TransactionInput from './components/TransactionInput';
import Header from './components/Header/Header';
import Login from './components/User Controls/Login';
import SignUp from './components/User Controls/SignUp';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="Budgie">
        <Header />
          <Routes>
            <Route path='/transaction' element={<TransactionInput />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        
   </div>
  );
}

export default App;
