import { useNavigate } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import Logo from '../../Images/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/sign-up');
  };
  const navigateToSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Download</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Calculator</a>
        </li>
      </ul>

      <div className="navbar-cta">
        <button onClick={navigateToSignIn}>Sign In</button>
        <button onClick={navigateToSignUp}>Sign Up</button>
      </div>
      <div className="hambuger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
