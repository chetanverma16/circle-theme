import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <>
      <div className="bg-image" />
      <div className="max-w-7xl mx-auto px-8 mt-28 mb-32 md:mt-36 md:mb-28">
        <Fade>
          <div className="flex justify-center flex-col text-center gap-4 md:mx-28 lg:mx-48">
            <h1 className=" text-white font-poppins font-semibold text-center leading-snug text-5xl sm:text-6xl lg:text-8xl">
              Innovation within
              <span className="text-gradient-header ml-3">Reach</span>
            </h1>
            <h2 className="text-white font-poppins opacity-80 font-medium text-base xxs:text-base xs:text-lg sm:text-lg md:text-lg lg:text-lg 2xl:text-xl">
              We deliver premium creative solutions to your technology needs.
            </h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex justify-center items-center w-full mt-12">
            <a
              href="https://calendly.com/techfi/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                colorClass="bg-lightBlue-400 hover:bg-lightBlue-500"
                marginClass="px-4 py-3"
                title="Book a Free Consultation"
                textColor="text-white text-base font-medium tracking-wide"
              ></Button>
            </a>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Header
