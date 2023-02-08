import { Link } from 'react-router-dom'
import './header.scss'
let Header = ({ loggedInUser }) => {
  return (
    <><div className="header">
      <div className="logo">
        <img src="https://i.imgur.com/DzKugbJ.png" alt="" />
      </div>
      <div className="titslo">
        <h1 className="Title">Budgiet</h1>
        <h2 className='slogan'>Don't let your money fly away</h2>
      </div> 
      <div className="nav">
      {!loggedInUser && (
          <>
            <Link to='/signup'>Sign up!</Link>
            <Link to='/login'>Log in!</Link>
          </>
        )}
        {loggedInUser && (
          <>
            <Link to='/transaction'>Transaction</Link>
            <Link to='/logout'>Log out</Link>
            <Link to='/balance'>Balance</Link>
          </>
        )}
      </div>
  </div></>
  )
}

export default Header