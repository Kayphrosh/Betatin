import React from 'react'
import DashboardNavBar from '../../../Components/Dashboard Navbar/DashboardNavBar';
import AddMoneyHeader from './AddMoneyHeader';
import ViaBankTransfer from './ViaBankTransfer';
import ViaCard from './ViaCard';
import './add-money.css'

const AddMoneyContainer = () => {
  return (
    <section className='dashboard-container'>
      <DashboardNavBar />

      <AddMoneyHeader />
    <ViaBankTransfer />
    <ViaCard />
    </section>
  )
}

export default AddMoneyContainer;