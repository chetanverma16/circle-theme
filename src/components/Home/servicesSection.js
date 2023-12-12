import React from "react"
import Fade from "react-reveal/Fade"
import Slider from "react-slick"
import Angular from "../../images/angular.png"
import Aws from "../../images/aws.png"
import Cloud from "../../images/cloud.png"
import Nodejs from "../../images/nodejs.png"
import Python from "../../images/python.png"
import ReactNative from "../../images/react-native.svg"
import Reactjs from "../../images/react.png"
import django from "../../images/django.png"

const ServicesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    accessibility: false,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
  }
  return (
    <>
      <Fade bottom cascade>
        <div className="w-screen mt-16 px-0">
          <div>
            <Slider {...settings}>
              {/* <!-- Grid cell 1 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Angular}
                  alt="Angular Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 2 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Aws}
                  alt="Aws Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 3 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Cloud}
                  alt="Google Cloud Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 4 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Nodejs}
                  alt="Node.js Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 5 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Python}
                  alt="Python Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 6 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={django}
                  alt="django Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 7 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={Reactjs}
                  alt="React Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <!-- Grid cell 8 --> */}
              <div className="w-full h-24 flex justify-center items-center p-8">
                <img
                  src={ReactNative}
                  alt="ReactNative Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Slider>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default ServicesSection
