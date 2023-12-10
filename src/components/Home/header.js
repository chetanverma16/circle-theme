import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

// Assets
import HeaderImage from "../../images/server-main-page.png"

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 my-20 mb-100">
        <Fade>
          <div className="flex justify-center flex-col text-center gap-8 bg-[url(${HeaderImage})]">
            <h1 className=" text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
              Innovation within 
              <span className="text-gradient-header ml-3"> 
                Reach
              </span>
            </h1>
            <h2 className="text-white font-poppins opacity-80 font-semibold text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
              We deliver premium creative solution to your tech problems
            </h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="mt-10 px-5 py-5 bg-gray-800 sm:w-4/12 m-auto rounded-2xl">
            <div className="grid grid-cols-1 gap-2  justify-between">
              <div className="col-start-1 col-span-2"> 
                <Input placeholder="email."></Input>
              </div>
              <div className="flex col-span-1 col-start-3 justify-center sm:justify-start">
                <Button
                  colorClass="bg-lightBlue-400"
                  title="Request Access"
                  textColor="text-white"
                ></Button>
              </div>
            </div>
          </div>
        </Fade>
        {/* <div className="max-w-7xl mx-auto mt-10">
          <div className="w-full h-auto overflow-hidden rounded-xl">
            <img className="w-full h-full" src={HeaderImage} alt="Header"></img>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Header
