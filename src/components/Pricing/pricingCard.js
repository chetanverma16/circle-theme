import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slider, { Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../styles/pricingHeader.css'; // Make sure to create a corresponding CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGem, faDollarSign } from '@fortawesome/free-solid-svg-icons';


const PricingCard = ({ plan, isYearlyBilling }) => {
  const [isHovered, setIsHovered] = useState(false);
  const start = 2;
  const max = 10;
  const [numSliders, setNumSliders] = useState(start); // Assuming the start position is 2
  const startPosition = start; // Start position of the slider
  const icons = [faLinkedin, faTwitter, faInstagram];
  const features = ['LinkedIn post', 'Twitter post', 'Instagram post'];

  // Function to check if a value is a float
  const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
  };

  // Function to update the slider value and adjust pricing accordingly
  const handleSliderChange = (value) => {
    setNumSliders(value);
  };

  const customHandle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    // Use a custom handle to display the value dynamically
    return (
      <Handle {...restProps}>
        <div className="tooltip">{value} post per day</div> {/* Ensure this tooltip is styled and positioned correctly */}
      </Handle>
    );
  };

  // Calculate the price based on the slider's position
  const calculatePrice = () => {
    if (parseFloat(plan.price)) {
      const difference = numSliders - startPosition;
      let price = 0;
      // Add $1 for each difference to the monthly and $10 for the yearly plan
      if (isYearlyBilling) {
        price = plan.yearlyPrice + (difference * 10); // Assuming plan.yearlyPrice is a number
      } else {
        price = plan.price + (difference * 1); // Assuming plan.price is a number
      }
      return parseFloat(price).toFixed(2);
    } else {
      return plan.price;
    }
  };

  return (
    <Fade bottom>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`max-w-sm flex-1 m-4 p-6 flex flex-col justify-between rounded-xl shadow-lg transition ease-in-out duration-300 plan-border-gradient transform hover:scale-105
         hover:bg-black ${isHovered ? 'scale-125 bg-black' : 'bg-gray-200'} text-black hover:text-white relative cursor-pointer overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-lg mb-4">
            <FontAwesomeIcon icon={faGem} /> {plan.name}
          </h3>
          <p className="text-4xl mb-5 font-bold">{isFloat(plan.price) ? <FontAwesomeIcon icon={faDollarSign} /> : ''}{calculatePrice()}</p>
          <ul className="list-none p-0 mb-5">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="mb-2 flex items-center">
                <FontAwesomeIcon icon={icons[featureIndex]} />
                <span className="ml-2">{`${numSliders} ${feature}`}</span>
              </li>
            ))}
            {plan.extraFeature && (plan.extraFeatures.map((feature, featureIndex) => (
              <li key={featureIndex} className="mb-2 flex items-center">
                <span className="ml-2">{`${feature}`}</span>
              </li>
            )))}
          </ul>
          {plan.slider && (<Slider min={start} max={max} defaultValue={start} onChange={setNumSliders} handle={customHandle} className="mt-6" />)}

          <button className={`px-10 py-2 text-base font-semibold rounded-full shadow transition-colors duration-300 mt-auto ${plan.buttonVariant === 'primary' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-700 hover:bg-gray-800 text-white'
            }`}>
            {plan.buttonLabel}
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default PricingCard;