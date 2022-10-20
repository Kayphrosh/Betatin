import React from 'react';
import './newsletter.css'
function Newsletter() {
  return (
    <div className='newsletter-container'>
      <header>
        <h3>Let's Keep You In Touch</h3>
        <p>
          All the latest design drops, limited offers and more straight to your
          inbox!
        </p>
      </header>

      <form action="" className='newsletter-form'>
        <input type="text" placeholder='enter your email here...' />
        <button type='submit'>
            <p>subscirbe</p>
            <iconify-icon class='iconify' icon="bx:right-arrow-alt"></iconify-icon>
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
