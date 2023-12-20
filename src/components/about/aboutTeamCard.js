import React from "react"
import Fade from "react-reveal/Fade"

const AboutTeamCard = ({ imgSrc, position }) => {
  return (
    <Fade bottom cascade>
      <div className="w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        <img className="object-cover h-full w-full absolute" src={imgSrc}></img>
        <h1 className="bg-gray-100 blur-2xl backdrop-blur-lg bg-opacity-70 font-semibold absolute p-2 rounded-xl w-3/4 mb-4 text-center border-2 border-gray-300 border-opacity-60">
          {position}
        </h1>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
