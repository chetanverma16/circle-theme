import React from "react"
import Slider from "react-slick"
import Angular from "../../images/angular.png"
import Aws from "../../images/aws.png"
import Cloud from "../../images/cloud.png"
import Nodejs from "../../images/nodejs.png"
import ReactNative from "../../images/react-native.png"
import Reactjs from "../../images/react.png"
import django from "../../images/django.png"
import Swift from "../../images/swift.png"

const TechSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider className="w-screen mt-15 px-0 py-4 my-2" {...settings}>
        {/* <!-- Grid cell 1 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Angular}
            alt="Angular Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 2 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Aws}
            alt="Aws Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 3 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Cloud}
            alt="Azure Cloud Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 4 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Nodejs}
            alt="Node.js Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 5 --> */}
        {/* <div className="w-full h-24 flex justify-center items-center py-6">
                <img
                  src={Python}
                  alt="Python Logo"
                  className="w-full h-full object-contain"
                />
              </div> */}
        {/* <!-- Grid cell 6 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={django}
            alt="django Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 7 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Reactjs}
            alt="React Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 8 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={ReactNative}
            alt="ReactNative Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <!-- Grid cell 8 --> */}
        <div className="w-full h-24 flex justify-center items-center py-4">
          <img
            src={Swift}
            alt="Swift Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Slider>
    </>
  )
}

export default TechSection
