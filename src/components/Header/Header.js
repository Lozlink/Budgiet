import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './header.scss'

let Header = ({ loggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <><div className="header">
      <div className="logo">
        <img src="https://i.imgur.com/DzKugbJ.png" alt="" />
      </div>
      <div className="titslo">
        <h1 className="Title">Budgiet</h1>
        <h2 className='slogan'>Don't let your money fly away</h2>

        <h2>UNDER CONSTRUCTION</h2> 
      </div> 
      <div className="nav">
      {!loggedInUser && (
          <>
          <div onClick={() => setIsOpen(!isOpen)}><h2>Click me!</h2></div>
          {isOpen && (
            <ul>
              <li><Link to='/signup'>Sign up!</Link></li>
              <li><Link to='/login'>Log in!</Link></li>
            </ul>
          )}
          </>
          
        )}
        {loggedInUser && (
          <>
          <div onClick={() => setIsOpen(!isOpen)}>User Menu</div>
          {isOpen && (
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to="/transaction">New Transaction</Link></li>
              <li><Link to="/transactionhistory">Transaction History</Link></li>
              <li><Link to="/balance">Balance</Link></li>
              <li><Link to="/logout">Log out</Link></li>
            </ul>
          )}
          </>
        )}
      </div>
  </div></>
  )
}

export default Header