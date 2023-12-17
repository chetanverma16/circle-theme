import React from "react"
import Fade from "react-reveal/Fade"
import Slider from "react-slick"
import Angular from "../../images/angular.png"
import Aws from "../../images/aws.png"
import Cloud from "../../images/cloud.png"
import Nodejs from "../../images/nodejs.png"
import Python from "../../images/python.png"
import ReactNative from "../../images/react-native.png"
import Reactjs from "../../images/react.png"
import django from "../../images/django.png"
import Swift from "../../images/swift.png"

const TechSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 20000,
    accessibility: false, // Enable tabbing and arrow key navigation
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 5, // number of slides to show
    slidesToScroll: 5, // number of slides to scroll
    draggable: false, // makes slides not draggable
    swipe: false, // disables swipe functionality
    touchMove: false, // disables touch move
    pauseOnHover: false, // does not pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 10000,
          slidesToShow: 4, // number of slides to show
          slidesToScroll: 4, // number of slides to scroll
        }
      },
      {
        breakpoint: 600,
        settings: {
          speed: 10000,
          slidesToShow: 2, // number of slides to show
          slidesToScroll: 2, // number of slides to scroll
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          speed: 5000,
          slidesToShow: 1, // number of slides to show
          slidesToScroll: 1 // number of slides to scroll
        }
      }
    ]
  }
  return (
    <>
      <Fade bottom cascade>
        <div className="w-screen mt-16 px-0">
          <div className="mt-5">
            <Slider {...settings}>
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
          </div>
        </div>
      </Fade>
    </>
  )
}

export default TechSection
