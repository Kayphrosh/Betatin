import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import './sign-in.css';
import './sign-up.css';
function SignIn() {

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };


  return (
    <section className="sign-up-container">
      <main className="sign-up">
        <header className="logo">
          <img src={Logo} alt="" />
        </header>
        <form action="" class="sign-up-form">
          <header>
            <h3>Sign In</h3>
            <p>Log in with the information you used while creating an account.</p>
          </header>
          <label for="email">Email</label>
          <input type="email" placeholder="enter your email address" />
          <label for="password">Password</label>
          <input type="password" placeholder="input password" />

          <div class="forgot-password-text">
            <p>
              forgot password? <a href="#">click here</a>{' '}
            </p>
          </div>
          <button type="submit" onClick={navigateToDashboard}>Get Started</button>
          <span className="sign-in-link">
            <p>
              Don't have an account yet?<a href="#">Sign In</a>
            </p>
          </span>
        </form>
      </main>

      <aside></aside>
    </section>
  );
}

export default SignIn;
