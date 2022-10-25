import React from 'react';
import './how-it-works.css';
import Mockup from '../../Images/mockup.svg';
import Vector from '../../Images/Vector.svg';
import Vector2 from '../../Images/Vector2.svg';
import QR from '../../Images/qr-code.png';

function HowItWorks() {
  return (
    <section className="how-it-works-container">
      <img src={Vector} className="vector-1" alt="" />
      <header>
        <span>How It Works</span>
        <h3>Get The Best Experience While You Save For The Future</h3>
        <img src={Vector2} className="vector-2" alt="" />
      </header>
      <div className="how-it-works">
        <div className="steps-container">
          <main className="steps">
            <article className="step">
              <h5>Sign Up on the web/mobile app</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipcing elit ut
                aliquam, purus sit amet luctus venenatis, Lorem ipsum dolor sit
                amet. Lorem{' '}
              </p>
            </article>
            <article className="step">
              <h5>Sign Up on the web/mobile app</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipcing elit ut
                aliquam, purus sit amet luctus venenatis, Lorem ipsum dolor sit
                amet. Lorem{' '}
              </p>
            </article>
            <article className="step">
              <h5>Sign Up on the web/mobile app</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipcing elit ut
                aliquam, purus sit amet luctus venenatis, Lorem ipsum dolor sit
                amet. Lorem{' '}
              </p>
            </article>
          </main>
          <footer className="qr-code">
            <p>Scan the QR code to download the Betatin app</p>
            <img src={QR} alt="" />
          </footer>
          <footer className="download-btn-container">
            <h4>Download Betatin App</h4>
            <div className='download-btn'>
              <button>
                <iconify-icon class='iconify'  icon="fontisto:google-play"></iconify-icon>
                <span>
                  <p>Available on the</p>
                  <p>Google Play</p>
                </span>
              </button>
              <button>
                <iconify-icon class='iconify' icon="ci:app-store"></iconify-icon>
                <span>
                  <p>Download on the</p>
                  <p>Apple Store</p>
                </span>
              </button>
            </div>
          </footer>
        </div>

        <div className="illustration-img">
          <img src={Mockup} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
