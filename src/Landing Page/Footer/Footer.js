import React from 'react';
import './footer.css';
// import Logo from '..src/Images/logo.svg'
import Newsletter from './Newsletter';
import FooterInc from './FooterInc';
const Footer = () => {
  return (
    <footer className="footer-container">
      <Newsletter />
      <main className="footer">
        <div className="footer-nav-container">
          <div class="footer-nav">
            <h6>Company</h6>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div class="footer-nav">
            <h6>Information</h6>

            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <div class="footer-nav">
            <h6>Contact Us</h6>

            <ul>
              <li>
                <a href="#">Address: Lagos State, Nigeria</a>
              </li>
              <li>
                <a href="#">Email: Betatin@gmail.com</a>
              </li>
              <li>
                <a href="#">Phone: +234800000000</a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <aside className='download-button-container'>
          <div className='download-btn'>
            <button>
              <iconify-icon
                class="iconify"
                icon="fontisto:google-play"
              ></iconify-icon>
              <span>
                <p>Available on the</p>
                <p>Google Play</p>
              </span>
            </button>
            <button>
            <iconify-icon class='iconify' icon="cib:app-store"></iconify-icon>
              <span>
                <p>Download on the</p>
                <p>Apple Store</p>
              </span>
            </button>
          </div>
          <div className='download-btn web-signin'>
            <button>
              <iconify-icon class="iconify" icon="pepicons:internet"></iconify-icon>
              <p>Sign Up On Web</p>
            </button>
          </div>
      </aside>
    <FooterInc />
    </footer>
  );
};

export default Footer;
