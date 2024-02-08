import React from "react"
import Fade from "react-reveal/Fade"

const CareersRoles = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
      <h2 className="text-sm font-bold opacity-50">Join our team</h2>
      <h1 className="text-6xl font-bold mt-3">View open roles</h1>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">Product Design Manager</h2>
            <p className="mt-10 opacity-50">
              Join our team as a Product Design Manager and lead innovative design projects. We're looking for a creative individual who can drive product development with user-centered design principles and a passion for crafting exceptional user experiences.
            </p>
          </a>
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">Senior Data Engineer</h2>
            <p className="mt-10 opacity-50">
              We're seeking a Senior Data Engineer to join our dynamic team. In this role, you will be responsible for developing and maintaining scalable data infrastructure, implementing data pipelines, and optimizing data processes. If you're passionate about data-driven solutions and enjoy tackling complex challenges, we want to hear from you.
            </p>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default CareersRoles
