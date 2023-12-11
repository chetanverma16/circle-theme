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
              <span className="text-gradient-header ml-3"> 
                Reach
              </span>
            </h1>
            <h2 className="text-white font-poppins opacity-80 font-medium text-base xxs:text-base xs:text-lg sm:text-lg md:text-lg lg:text-lg 2xl:text-xl">
              We deliver premium creative solution to your tech problems
            </h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="mt-10 px-5 py-4 bg-gray-900 sm:w-8/12 lg:w-2/5 m-auto rounded-2xl">
            <div className="grid grid-cols-1 gap-3 justify-between">
              <div className="col-start-1 col-span-2 bg-gray-800"> 
                <Input placeholder="Email address"></Input>
              </div>
              <div className="flex col-span-1 col-start-3 justify-center sm:justify-start">
                <Button
                  colorClass="bg-lightBlue-400 hover:bg-lightBlue-500"
                  title="Contact Us"
                  textColor="text-white"
                ></Button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Header
