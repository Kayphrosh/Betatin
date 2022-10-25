import React from 'react';

const ViaCard = () => {
  return (
    <section className="via-card">
      <div className="card-info">
        <h4>Via Card</h4>
        <p>
          Add money using your master card or visa card to fund your betatin
          account.
        </p>
        <div className="info-cta-btn">
          <button>
            <p>Copy</p>
          </button>
          <button>Share</button>
        </div>
      </div>

      <div className="transfer-border"></div>

      <form className="card-form">
        <span>
          <label htmlFor="">Account Holder Name</label>
          <input type="text" placeholder='Your Name' />
        </span>
        <span>
          <label htmlFor="">Card Number</label>
          <input type="number" placeholder='1234 1234 1234 1234'/>
        </span>
        <div className='expiry-date-cvv'>
          <span>
            <label htmlFor="">Card Expiry Date</label>
            <input type="date"  />
          </span>
          <span>
            <label htmlFor="">CVV</label>
            <input type="pin" placeholder='123' />
          </span>
        </div>
      </form>
    </section>
  );
};

export default ViaCard;
