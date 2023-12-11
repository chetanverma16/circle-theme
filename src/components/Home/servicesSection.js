import React from 'react';
import Fade from "react-reveal/Fade"
import Angular from "../../images/angular.png"
import Aws from "../../images/aws.png"
import Cloud from "../../images/cloud.png"
import Nodejs from "../../images/nodejs.png"
import Python from "../../images/python.png"
import Reactjs from "../../images/react.png"
const ServicesSection = () => {
  return (
    <Fade bottom cascade>
        <div class="w-screen mt-16 px-0">
            <div class="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-6 gap-0">
                {/* <!-- Grid cell 1 --> */}
                <div class="flex justify-center items-center border-b border-r 2xl:border-b-0 border-gray-800 p-8">
                <img src={Angular} alt="Angular Logo" class="w-36"/>
                </div>
                {/* <!-- Grid cell 2 --> */}
                <div class="flex justify-center items-center border-b sm:border-r 2xl:border-b-0 border-gray-800 p-8">
                <img src={Aws} alt="Aws Logo" class="w-36"/>
                </div>
                {/* <!-- Grid cell 3 --> */}
                <div class="flex justify-center items-center border-b border-r sm:border-r-0 2xl:border-b-0 2xl:border-r border-gray-800 p-8">
                <img src={Cloud} alt="Google Cloud Logo" class="w-48"/>
                </div>
                {/* <!-- Grid cell 4 --> */}
                <div class="flex justify-center items-center xxs:border-b sm:border-b-0 sm:border-r 2xl:border-b-0 border-gray-800 p-8">
                <img src={Nodejs} alt="Node.js Logo" class="w-32"/>
                </div>
                {/* <!-- Grid cell 5 --> */}
                <div class="flex justify-center items-center border-r 2xl:border-b-0 2xl:border-r border-gray-800 p-8">
                <img src={Python} alt="Python Logo" class="w-36"/>
                </div>
                {/* <!-- Grid cell 6 --> */}
                <div class="flex justify-center items-center 2xl:border-b-0 border-gray-800 p-8">
                <img src={Reactjs} alt="React Logo" class="w-36"/>
                </div>
            </div>
        </div>
  </Fade>
  );
};

export default ServicesSection;
