import React, { useState }  from 'react';
import '../../styles/pricingHeader.css'; // Make sure to create a corresponding CSS file for styling
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';

import 'rc-slider/assets/index.css';
import Card from './pricingCard';
import Fade from "react-reveal/Fade"


const PricingPlan = () => {
  const [isYearlyBilling, setIsYearlyBilling] = React.useState(false);



  const plans = [
    {
      name: 'Starter Plan',
      planIcon: faGem,
      price: 9.99,
      yearlyPrice : 99.99,
      slider: false,
      extraFeature: false,
      buttonLabel: 'Get Started',
      buttonVariant: 'primary'
    },
    {
      name: 'Custom Plan',
      planIcon: faGem,
      price: 11.99,
      yearlyPrice: 109.99,
      slider: true,
      extraFeature: true,
      extraFeatures: ['Custom branding', 'Customer Support', 'Scheduling'],
      buttonLabel: 'Get Started',
      buttonVariant: 'primary'
    },
    {
      name: 'Enterprise',
      planIcon: faGem,
      price: 'Custom Pricing',
      yearlyPrice: 'Custom Pricing',
      slider: false,
      extraFeature: true,
      extraFeatures: ['Custom branding', 'Customer Support', 'Scheduling'],
      buttonLabel: 'Talk to Us',
      buttonVariant: 'secondary'
    }
  ];



  // This function toggles the billing period between monthly and yearly
  const toggleBilling = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  return (
  <div className="flex flex-col items-center font-sans bg-black text-white py-12">
  <div className="flex items-center mb-6">
      <span>Billed Monthly</span>
      <label className="switch relative inline-block w-14 h-8 mx-2 align-middle">
        <input
          type="checkbox"
          className="sr-only"
          checked={isYearlyBilling}
          onChange={toggleBilling}
        />
        <span className={`absolute left-0 right-0 block w-14 h-8 transition duration-300 ease-in-out rounded-full ${isYearlyBilling ? 'bg-green-500' : 'bg-gray-300'}`}></span>
        <span className={`dot absolute top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out ${isYearlyBilling ? 'translate-x-6' : 'translate-x-1'}`}></span>

    </label>
      <span>Billed Annually</span>
  </div>
  <div className="flex justify-center w-full px-4 ">
    {plans.map((plan, index) => (
      <Card key={plan.id} plan={plan} isYearlyBilling={isYearlyBilling} index={index} />
    ))}
    </div>
  </div>
  );
};

export default PricingPlan;
