import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex">
          <div className="w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Careers</h2>
            <h1 className="text-5xl font-bold">
              Join us, and help everyone <br></br> create for the web.
            </h1>
            <p className="mt-5 opacity-70">
              We're on a mission to empower individuals to create for the web. Join our diverse team of innovators, creators, and problem solvers who are passionate about making a difference. <br></br><br></br> At our company, you'll have the opportunity to collaborate with talented professionals, tackle exciting challenges, and contribute to projects that impact millions of users worldwide.
            </p>
          </div>
          <div className="w-2/4 rounded-xl overflow-hidden m-2">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-row-reverse mt-10">
          <div className="w-2/5 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Join Our Team</h2>
            <h1 className="text-5xl font-bold">
            Shape the Future with Us
            </h1>
            <p className="mt-5 opacity-70">
            We're looking for talented individuals who are passionate about innovation and technology. As part of our team, you'll have the opportunity to work on cutting-edge projects and collaborate with industry leaders to drive positive change. Join us in shaping the future of digital experiences and making a meaningful impact on businesses and communities around the world.
            </p>
          </div>
          <div className="w-3/5 rounded-xl overflow-hidden m-2">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
