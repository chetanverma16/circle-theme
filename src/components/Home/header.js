import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <div className="bg-image" />
      <div className="max-w-7xl mx-auto px-8 mt-28 mb-32 md:mt-36 md:mb-60">
        <Fade>
          <div className="flex justify-center flex-col text-center gap-6 md:mx-28 lg:mx-44">
            <h1 className=" text-white font-poppins font-semibold text-center leading-snug text-5xl sm:text-6xl lg:text-8xl">
              Innovation within
              <span className="text-gradient-header ml-3">Reach</span>
            </h1>
            <h2 className="text-white font-poppins opacity-80 font-normal tracking-wide text-base xxs:text-base xs:text-lg sm:text-lg md:text-lg lg:text-2xl 2xl:text-2xl mx-36">
              We deliver premium creative solutions to your technology needs.
            </h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex justify-center items-center w-full mt-20 gap-6">
            <a
              href="https://calendly.com/techfi/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
              className="solid-button"
              >Book a Free Consultation</button>
            </a>
            <Link to="/contact">
              <button
                className="ghost-button"
                >Contact Us
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Header
