import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Ensure this CSS is imported to style the slider

const PricingHeader = () => {
  // State to hold the selected number of posts for the premium plan
  const [numPosts, setNumPosts] = useState(2); // Initial value set to 2

  return (
    <div className="max-w-7xl mx-auto mt-10 font-poppins text-white flex flex-col items-center">
      <Fade bottom>
        <h1 className="text-6xl font-bold m-5 xxs:text-xl sm:text-4xl lg:text-6xl">
          Simple, transparent pricing
        </h1>
        <h2 className="text-base opacity-50 text-center xxs:text-sm sm:text-lg">
          Get the Circle plan that fits your needs at a special introductory price.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-4 mt-10 xxs:grid-cols-1 sm:grid-cols-2">
          {/* Essential Plan */}
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple">
              Essential
            </h2>
            <h1 className="text-4xl mt-2 font-bold">$49/Mo</h1>
            <h3 className="text-sm mt-2 opacity-50">
              Better insights for growing businesses that want more customers.
            </h3>
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">1 LinkedIn post</li>
              <li className="text-sm opacity-70 py-2">1 Twitter post</li>
              <li className="text-sm opacity-70 py-2">1 Facebook post</li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Start Free Trial
            </button>
          </div>
          {/* Premium Plan */}
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple">
              Premium
            </h2>
            <h1 className="text-4xl mt-2 font-bold">$79/Mo</h1>
            <h3 className="text-sm mt-2 opacity-50">
              Everything in Essential, plus more advanced features.
            </h3>
            {/* Slider to select the number of posts */}
            <Slider min={2} max={10} defaultValue={2} onChange={setNumPosts} />
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">{numPosts} LinkedIn posts</li>
              <li className="text-sm opacity-70 py-2">{numPosts} Twitter posts</li>
              <li className="text-sm opacity-70 py-2">{numPosts} Facebook posts</li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Start Free Trial
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PricingHeader;
