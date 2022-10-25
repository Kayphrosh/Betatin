import React from 'react'
import Logo from '../../Images/logo.svg';
import User from '../../Images/headerImg1.jpg';
import './dashboard-navbar.css'
const DashboardNavBar = () => {
  return (
    <nav className='dashboard-navbar'>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>

        <div className='user-image'>
            <img src={User} alt="" />
        </div>
    </nav>
  )
}


export default DashboardNavBar