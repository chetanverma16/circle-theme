import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <div className="bg-image" />
      <div className="max-w-7xl mx-auto px-8 mt-32 mb-20 md:mt-36 lg:mt-24">
        <Fade>
          <div className="flex justify-center flex-col text-center gap-6 md:mx-28 lg:mx-44">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" text-white font-poppins font-semibold text-center leading-snug text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl">
                Innovation
              </h1>
              <h1 className=" text-white font-poppins font-semibold text-center leading-snug text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl">
                within
                <span className="text-gradient-header ml-3">Reach</span>
              </h1>
              <h2 className="text-white font-poppins opacity-80 font-normal tracking-wide text-lg md:text-xl lg:text-2xl mt-5 mx-4 sm:mx-10 md:mx-14 lg:mx-24 xl:mx-36">
                We deliver premium creative solutions to your technology needs.
              </h2>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-14 gap-6">
            <a
              href="https://calendly.com/techfi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="solid-button w-full sm:w-auto">Book a Free Consultation</button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="ghost-button w-full sm:w-auto">Contact Us</button>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Header
