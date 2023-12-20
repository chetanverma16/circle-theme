import React from "react"
import Ozan from "../../images/ozan.jpg"
const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4 saturate-50"
          src={Ozan}
        ></img>
        <div className="flex flex-col justify-between">
          <p className="text-gray-100 font-normal italic p-8 text-2xl text-left leading-9 xxs:text-center sm:text-left">
          With a passion for problem-solving and a deep understanding of the 
          IT landscape, Ozan has always been at the forefront of technological innovation. 
          His journey began as a software engineer, where he honed his skills and 
          foresight in technology. This foundation paved the way 
          for the inception of Techfi.  
          Under his guidance, Techfi has grown into a beacon of innovation, 
          helping businesses navigate and thrive in the digital age.{" "}
          </p>
          <div className="text-gray-300 text-right m-8 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Ozan Muldur</h1>
            <h3 className="text-gray-200 text-lg font-bold opacity-50">Founder</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
