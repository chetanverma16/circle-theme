import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2890&q=80"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
        At Techfi, we're more than IT specialists;
        we're pioneers of future-ready solutions. 
        Our tailored services are designed to scale, innovate, 
        and drive your business towards unprecedented success. 
        With Techfi, experience the power of progress.
        </p>
      </div>
    </div>
  )
}

export default AboutMore
