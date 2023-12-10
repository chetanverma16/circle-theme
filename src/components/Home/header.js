import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

// Assets
import HeaderImage from "../../images/server-main-page.png"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            We deliver premium creative solution
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Innovation within <br></br>
            <span class="text-gradient-header">
              Reach
            </span>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:w-6/12">
          <div className="col-span-1"> 
            <Input placeholder="email."></Input>
          </div>
          <div className="flex col-span-1 justify-center sm:justify-start">
            <Button
              colorClass="bg-gradient-to-r from-pink to-purple"
              title="Request Access"
              textColor="text-white"
            ></Button>
          </div>
        </div>
      </Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img className="w-full h-full" src={HeaderImage} alt="Header"></img>
        </div>
      </div>
    </div>
  )
}

export default Header
