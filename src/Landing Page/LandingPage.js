import React from 'react';
import './customers.css'

import HeroeContainer from './HeroeContainer';
import Customers from './Customers';
import Services from './Services';
import HowItWorks from './HowItWorks';
import { Faq } from './Faq';
import Footer from './Footer/Footer';
const LandingPage =() => {
  return (
    <>
      <HeroeContainer />
      <Customers />
      <Services />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}

export default LandingPage;
