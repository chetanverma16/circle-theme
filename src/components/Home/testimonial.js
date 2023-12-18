import React from "react"
import Fade from "react-reveal/Fade"
import Michael from "../../images/businessman.png"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/5 xxs:w-full xs:w-full sm:w-3/4">
            <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
              <em>&quot;I've always been hesitant to outsource our IT needs. But when we partnered with Techfi, I was pleasantly surprised. Their team revamped our entire digital presence. They were not just service providers; they became a crucial part of our team, understanding and aligning with our goals.&quot;</em>
            </div>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
              Michael Thompson
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
              CEO, Greenwood Industries
              </h1>
            </div>
          </div>
          <div className="w-1/5 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src={Michael}
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
