import React from 'react';
import Navbar from './Navbar';
import './heroe-container.css';
import PeopleIllustration from '../Images/people-illustration.svg';
import HeaderImage1 from '../Images/headerImg4.jpg';
import HeaderImage2 from '../Images/headerImg2.jpg';
import HeaderImage3 from '../Images/headerImage3.jpg';

function HeroeContainer() {
  return (
    <div className="heroe-container">
      <Navbar />
      <header className="heroe-content">
        <img src={PeopleIllustration} alt="" />
        <h1>
          Pension <span> Micro-Services </span> Solving Your Financial Needs
          After Retirement
        </h1>
        <p className='p-quote'>
          Betatin is a rapidly-growing fintech company transforming the
          retirement industry for the better.
        </p>
        <div className="header-cta">
          <button>
            <iconify-icon class='iconify' icon="ci:download"></iconify-icon>
            <p>Download App</p>
          </button>
          <button>
            <p>Get Started</p>
          </button>
        </div>
      </header>

      <footer>
        <div className="feature">
          <img src={HeaderImage1} alt="" />
          <span>
            <article>
              <h5>Available For Artisians</h5>
              <p>
                Betatin is a rapidly-growing fintech company growing fintech
                company
              </p>
            </article>
            <button>
              <iconify-icon
                className="iconify"
                icon="bx:right-arrow-alt"
              ></iconify-icon>
            </button>
          </span>
        </div>

        <div className="feature">
          <img src={HeaderImage2} alt="" />
          <span>
            <article>
              <h5>Secure Wallets</h5>
              <p>
                Betatin is a rapidly-growing fintech company growing fintech
                company
              </p>
            </article>
            <button>
              <iconify-icon
                className="iconify"
                icon="bx:right-arrow-alt"
              ></iconify-icon>
            </button>
          </span>
        </div>

        <div className="feature">
          <img src={HeaderImage3} alt="" />
          <span>
            <article>
              <h5>Get Your Future Electrified</h5>
              <p>
                Betatin is a rapidly-growing fintech company growing fintech
                company
              </p>
            </article>
            <button>
              <iconify-icon
                className="iconify"
                icon="bx:right-arrow-alt"
              ></iconify-icon>
            </button>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default HeroeContainer;
