import React from 'react';
import { Link } from 'react-router';

const logInLinks = () => (
  <nav>
    <Link to='/login'>
      Log in
    </Link>
    <br/>
    <Link to='/signup'>
      Sign up
    </Link>
  </nav>
);

const successGreeting = (currentUser, logOut) => (
  <div>
    <h2>Welcome, {currentUser.username}</h2>
    <button className='header-Button' onClick={logOut}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logOut }) => (
  currentUser ? successGreeting(currentUser, logOut) : logInLinks()
);

export default Greeting;
