import './App.css';
import TransactionInput from './components/TransactionInput';

function App() {
  return (
    <div className="Budgie">
        <div className="logo">
          <img src="https://i.imgur.com/DzKugbJ.png" alt="" />
        </div>
        <div className="header">
          <h1 className="Title">Budgiet</h1>
          <h2 className='slogan'>Don't get your money fly away</h2>
          <div className="nav">
            <ul>Sign in</ul>
            <ul>Log in</ul>
          </div>
        </div>
      <div className="input">
        <TransactionInput />
      </div>
    </div>
  );
}

export default App;
