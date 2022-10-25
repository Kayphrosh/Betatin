import React from 'react';
import MoneyTransferIcon from '../../../Images/money-transfer.svg';
import './add-money.css'
const AddMoneyHeader = () => {
  return (
    <div className='add-money-header'>
      <h3>Add Money</h3>
      <img src={MoneyTransferIcon} alt="" />
    </div>
  );
};

export default AddMoneyHeader;
