import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import './sign-up.css';



const SignUp =() => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate('/sign-in');
  };
  return (
    <section className="sign-up-container">
      <main className="sign-up">
        <header className="logo">
          <img src={Logo} alt="" />
        </header>
        <form action="" class="sign-up-form">
            <header>
                <h3>Sign Up</h3>
                <p>Give us some of your information to get you started. </p>
            </header>
          <div class="full-name">
            <span>
              <label for="first name">First Name</label>
              <input type="text" placeholder="Doe" />
            </span>
            <span>
              <label for="last name">Last Name</label>
              <input type="text" placeholder="John" />
            </span>
          </div>

          <label for="email">Email</label>
          <input type="email" placeholder="enter your email address" />
          <label for="phone number">Phone Number</label>

          <span class="phone-number">
            <input type="tel" placeholder="8000000000" />
            <p>+234 &nbsp; |</p>
          </span>

          <label for="password">Password</label>
          <input type="password" placeholder="password" />

          <div class="policy-checkbox">
            <input type="checkbox" name="" id="checkbox" placeholder="1" />
            <p>
              By creating an account you agree to the terms of and privacy
              policy?
            </p>
          </div>
          <button type="submit" onClick={ navigateToSignIn}>Get Started</button>
          <span className='sign-in-link'>
            <p>Already have an account? <a href="#">Sign In</a></p>
            </span>
        </form>
      </main>

      <aside></aside>
    </section>
  );
}

export default SignUp;
