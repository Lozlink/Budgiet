import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss'

const HomePage = ({ loggedInUser }) => {
  return (
    <div className="home-page">
      <h1>Welcome to Budgiet</h1>
      {!loggedInUser && (
          <img src="https://www.omlet.co.uk/images/originals/wild_budgies.jpg" alt=""/>
        )}
        {loggedInUser && (
          <><h2> {loggedInUser.name} </h2><img src="https://wallpapercrafter.com/th8001/595075-budgie-birds-close-green-bird-yellow-birds-pets.jpg" alt="" /></>
        )}
    </div>
  );
}

export default HomePage;