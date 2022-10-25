import React from 'react'
import './add-money.css'

const ViaBankTransfer = () => {
  return (
    <section className='via-transfer'>
        <div className='transfer-info'>
            <h4>Via Bank Transfer</h4>
            <p>Use the details to send money to your Betatin account from any bank.</p>
            <div className="info-cta-btn">
                <button>
                    Copy
                </button>
                <button>
                    Share
                </button>
            </div>
        </div>

        <div className='transfer-border'></div>

        <div className='transfer-details'>
            <span>
                <label htmlFor="Account Nane :">Account</label>
                <p>Olabode Olakunbi Oluwakayode</p>
            </span>
            <span>
                <label htmlFor="Account Number :">Account Number</label>
                <p>0477317790</p>
            </span>
            <span>
                <label htmlFor="Bank Nane :">Bank Name</label>
                <p>Access Bank</p>
            </span>

        </div>


    </section>
  )
}

export default ViaBankTransfer