import React from 'react';
import CustomersImg from '../Images/customersImg.jpg';
import AsideImg from '../Images/customer-aside.svg';
function Customers() {
  return (
    <section className="customers-container">
      <main className='customers'>
        <img src={CustomersImg} alt="" />

        <article>
          <p>Our Customers</p>
          <h3>
            We Promise You Security Of Funds & Also Work To Meet Your Retirement
            Target
          </h3>
          <span className="customers-cta">
            <button>Learn More</button>
            <button>Get Started</button>
          </span>
        </article>
      </main>

      <img src={AsideImg} className="aside-img" alt="" />
    </section>
  );
}

export default Customers;
