import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss'

const HomePage = ({ loggedInUser }) => {
  return (
    <div className="home-page">
      <h1>Welcome to Budgiet</h1>
      <h3>"Take control of your finances with Budgiet - the budget expense calculator that empowers you to make smart money decisions. With easy to use tracking, you'll gain a clear understanding of your spending habits and be able to make informed choices that lead to financial freedom. So why wait? Start your budgeting journey with Budgiet today and take the first step towards a brighter financial future." </h3>
      {!loggedInUser && (
        <><h3>We appreciate the support. Please log in below</h3><div className="image-container">
          <Link to='/login'>
          <img src="https://www.omlet.co.uk/images/originals/wild_budgies.jpg" alt="" /><img src="https://i.pinimg.com/originals/0b/9e/51/0b9e512625df56c54819920cca2fe963.jpg" alt=""
            className='calculator-image' />
            </Link>
        </div></>
        )}
        <div className="image-container">
        {loggedInUser && (
          <Link to='/transactionhistory'>
          <><img src="https://wallpapercrafter.com/th8001/595075-budgie-birds-close-green-bird-yellow-birds-pets.jpg" alt="" />
          <img src="https://i.pinimg.com/originals/0b/9e/51/0b9e512625df56c54819920cca2fe963.jpg" alt="" className='calculator-image'/></>
          </Link>
        )}
        </div>
    </div>
  );
}

export default HomePage;