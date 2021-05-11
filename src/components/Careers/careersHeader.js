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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br> <br></br>It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
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
            <h2 className="text-sm opacity-50 font-semibold">Careers</h2>
            <h1 className="text-5xl font-bold">
              Join us, and help everyone <br></br> create for the web.
            </h1>
            <p className="mt-5 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br> <br></br>It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
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
